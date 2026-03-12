import { computed } from '@angular/core';
import { patchState, signalStore, withState, withComputed, withMethods } from '@ngrx/signals';
import { toObservable } from '@angular/core/rxjs-interop';
import { CartItem } from '../cart-item.model';
import { Order } from '../order/order.model';

type CartState = {
    items: CartItem[];
    persist: boolean;
};

const initialState: CartState = {
    items: [],
    persist: true,
};

function updateCart(state: CartItem[], item: CartItem): CartItem[] {
    let cart: CartItem[] = [...state];
    if (cart.length === 0) {
        cart.push(item);
    } else {
        let idx = cart.findIndex((i) => i.id === item.id);
        if (idx > -1) {
            if (item.quantity === 0) {
                cart = cart.filter((i) => i.id !== item.id);
            } else {
                cart[idx] = { ...item };
            }
        } else {
            cart.push(item);
        }
    }
    return cart;
}

export const cartStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed((store) => ({
        itemsCount: computed(() =>
            store.items().reduce((sum, item) => sum + item.quantity, 0)
        ),
        order: computed(() => {
            const items = store.items();
            return Object.assign(new Order(), items);
        }),
        sumTotal: computed(() =>
            store.items().reduce((sum, item) => sum + item.quantity * item.price, 0)
        ),
    })),
    withMethods((store) => ({
        // State mutations
        clear(): void {
            patchState(store, { items: [] });
            this.clearStorage();
        },
        set(item: CartItem): void {
            const updatedItems = updateCart(store.items(), item);
            patchState(store, { items: updatedItems });
        },
        togglePersist(persist: boolean): void {
            patchState(store, { persist });
            if (!persist) {
                this.clearStorage();
            }
        },
        // Storage operations
        saveToStorage(cart: CartItem[]): void {
            try {
                localStorage.setItem('cart', JSON.stringify(cart));
            } catch (err) {
                console.error('Failed to save cart to storage:', err);
            }
        },
        loadFromStorage(): void {
            try {
                const storedCart = localStorage.getItem('cart');
                if (storedCart) {
                    const items = JSON.parse(storedCart) as CartItem[];
                    patchState(store, { items });
                }
            } catch (err) {
                console.error('Failed to load cart from storage:', err);
            }
        },
        clearStorage(): void {
            try {
                localStorage.removeItem('cart');
            } catch (err) {
                console.error('Failed to clear cart storage:', err);
            }
        },
        // Observable getters for reactive access (pass Signal directly, not arrow function)
        getItems$() {
            return toObservable(store.items);
        },
        getCount$() {
            return toObservable(store.itemsCount);
        },
        getTotal$() {
            return toObservable(store.sumTotal);
        },
        getPersist$() {
            return toObservable(store.persist);
        },
        getOrder$() {
            return toObservable(store.order);
        },
    }))
);

