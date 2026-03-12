import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal, toObservable } from '@angular/core/rxjs-interop';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { Subscription, combineLatestWith, map, skip, startWith } from 'rxjs';
import { CatalogItem } from 'src/app/catalog/catalog-item.model';
import { FoodEntityService } from 'src/app/catalog/state/food-entity.service';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { sidenavStore } from 'src/app/state/sidenav/sidenav.store';
import { cartStore } from '../state/cart.store';
import { environment } from 'src/environments/environment';
import { CartItem } from '../cart-item.model';
import { ShopItemComponent } from '../shop-item/shop-item.component';
import { AILoggerService } from 'src/app/shared/logger/ai-logger.service';

@Component({
  selector: 'app-shop-container',
  imports: [
    MatSidenavModule,
    NgStyle,
    SidebarComponent,
    ShopItemComponent,
  ],
  templateUrl: './shop-container.component.html',
  styleUrl: './shop-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopContainerComponent {
  destroyRef = inject(DestroyRef);
  service = inject(FoodEntityService);
  cart = inject(cartStore);
  sidenav = inject(sidenavStore);
  ai = inject(AILoggerService);

  food = toSignal<CatalogItem[]>(this.service.entities$);
  cartItems = computed(() => this.cart.items());

  // sidenav
  sidenavMode: MatDrawerMode = 'side';
  sidenavVisible = computed(() => this.sidenav.sideNavVisible());

  // shopping cart
  cartSubs: Subscription | null = null;
  persistCart = environment.features.persistCart;

  constructor() {
    if (this.persistCart) {
      this.ensureStorageFeature();
    }
  }

  ngOnInit(): void {
    this.service.loaded$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((loaded: boolean) => {
        if (!loaded) {
          this.service.getAll();
        }
      });
  }

  // sidenav
  getWorkbenchStyle() {
    return computed(() => {
      const visible = this.sidenavVisible();
      return visible
        ? {
          'padding-left': '10px',
        }
        : {};
    });
  }

  // shopping cart
  getItemsInCart(id: number) {
    return computed(() => {
      const items = this.cartItems();
      let ct = (items as CartItem[]).find((i: CartItem) => i.id === id);
      return ct ? ct.quantity : 0;
    });
  }

  updateCart(f: CartItem) {
    this.ai.logEvent('cart', { action: 'update', item: f });
    this.cart.set(f);
  }

  ensureStorageFeature() {
    const items$ = this.cart.getItems$();
    const persist$ = this.cart.getPersist$();

    this.cartSubs = items$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        skip(1),
        combineLatestWith(persist$.pipe(startWith(true))),
        map(([items, persist]) => {
          if (persist) {
            this.cart.saveToStorage(items);
          }
        }),
      )
      .subscribe();

    persist$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((persist) => {
        if (persist) {
          this.cart.loadFromStorage();
        }
      });
  }
}
