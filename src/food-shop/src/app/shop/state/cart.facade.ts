import { Injectable, inject } from '@angular/core';
import { cartStore } from './cart.store';
import { CartItem } from '../cart-item.model';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartFacade {
  store = inject(cartStore);

  clear() {
    this.store.clear();
  }

  set(item: CartItem) {
    this.store.set(item);
  }

  togglePersist(persist: boolean) {
    this.store.togglePersist(persist);
  }

  getPersist() {
    return this.store.getPersistAsObservable();
  }

  getItems() {
    return this.store.getItemsAsObservable();
  }

  getItemsCount() {
    return this.store.getCountAsObservable().pipe(startWith(0));
  }

  getOrder() {
    return this.store.getOrderAsObservable();
  }

  getSumTotal() {
    return this.store.getTotalAsObservable().pipe(startWith(0));
  }

  saveToStorage(cart: CartItem[]) {
    this.store.saveToStorage(cart);
  }

  loadFromStorage() {
    this.store.loadFromStorage();
  }
}
