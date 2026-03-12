import { computed, inject } from '@angular/core';
import { patchState, signalStore, withState, withComputed, withMethods, withHooks } from '@ngrx/signals';
import { toObservable } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { switchMap, tap, pipe } from 'rxjs';
import { CatalogItem } from '../catalog-item.model';
import { environment } from 'src/environments/environment';

type CatalogState = {
    items: CatalogItem[];
    loading: boolean;
    loaded: boolean;
    error: string | null;
};

const initialState: CatalogState = {
    items: [],
    loading: false,
    loaded: false,
    error: null,
};

export const catalogStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed((store) => ({
        count: computed(() => store.items().length),
        isLoading: computed(() => store.loading()),
        isLoaded: computed(() => store.loaded()),
        hasError: computed(() => !!store.error()),
    })),
    withMethods((store, http = inject(HttpClient)) => ({
        // Load all items
        loadAll: rxMethod<void>(
            pipe(
                tap(() => {
                    patchState(store, { loading: true, error: null });
                }),
                switchMap(() =>
                    http.get<CatalogItem[]>(`${environment.catalogApi}food`).pipe(
                        tapResponse({
                            next: (items) => {
                                patchState(store, { items, loaded: true, loading: false });
                            },
                            error: (error: Error) => {
                                patchState(store, { error: error.message, loading: false });
                                console.error('Failed to load catalog:', error);
                            },
                        })
                    )
                )
            )
        ),

        // Add new item
        add: rxMethod<CatalogItem>(
            pipe(
                switchMap((item) =>
                    http.post<CatalogItem>(`${environment.catalogApi}food`, item).pipe(
                        tapResponse({
                            next: (newItem) => {
                                patchState(store, { items: [...store.items(), newItem] });
                            },
                            error: (error: Error) => {
                                patchState(store, { error: error.message });
                                console.error('Failed to add item:', error);
                            },
                        })
                    )
                )
            )
        ),

        // Update existing item
        update: rxMethod<CatalogItem>(
            pipe(
                switchMap((item) =>
                    http.put<CatalogItem>(`${environment.catalogApi}food`, item).pipe(
                        tapResponse({
                            next: (updatedItem) => {
                                const updatedItems = store.items().map((i) => (i.id === updatedItem.id ? updatedItem : i));
                                patchState(store, { items: updatedItems });
                            },
                            error: (error: Error) => {
                                patchState(store, { error: error.message });
                                console.error('Failed to update item:', error);
                            },
                        })
                    )
                )
            )
        ),

        // Delete item
        delete: rxMethod<number | string>(
            pipe(
                switchMap((id) =>
                    http.delete(`${environment.catalogApi}food/${id}`).pipe(
                        tapResponse({
                            next: () => {
                                const updatedItems = store.items().filter((i) => i.id !== id);
                                patchState(store, { items: updatedItems });
                            },
                            error: (error: Error) => {
                                patchState(store, { error: error.message });
                                console.error('Failed to delete item:', error);
                            },
                        })
                    )
                )
            )
        ),

        // Utility methods for backward compatibility
        getAll(): CatalogItem[] {
            return store.items();
        },

        getById(id: number | string): CatalogItem | undefined {
            return store.items().find((item) => item.id === id);
        },

        getItemsAsObservable() {
            return toObservable(store.items);
        },

        getLoadingAsObservable() {
            return toObservable(store.loading);
        },
    })),
    withHooks({
        onInit(store) {
            // Auto-load on init if not already loaded
            if (!store.loaded() && !store.loading()) {
                // @ts-ignore - rxMethod
                store.loadAll();
            }
        },
    })
);
