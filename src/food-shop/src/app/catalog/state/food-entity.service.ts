import { Injectable, inject } from '@angular/core';
import { catalogStore } from './catalog.store';
import { CatalogItem } from '../catalog-item.model';

@Injectable({
  providedIn: 'root',
})
export class FoodEntityService {
  private store = inject(catalogStore);

  // Observables for backward compatibility
  get entities$() {
    return this.store.getItemsAsObservable();
  }

  get loaded$() {
    return this.store.getLoadingAsObservable();
  }

  // Direct signal access
  get entities() {
    return this.store.items;
  }

  get loading() {
    return this.store.isLoading;
  }

  get loaded() {
    return this.store.isLoaded;
  }

  // Methods
  getAll() {
    this.store.loadAll();
  }

  add(item: CatalogItem) {
    this.store.add(item);
  }

  update(item: CatalogItem) {
    this.store.update(item);
  }

  delete(id: number) {
    this.store.delete(id);
  }

  getById(id: number | string) {
    return this.store.getById(id);
  }
}
