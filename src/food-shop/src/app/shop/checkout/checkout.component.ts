import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { combineLatest, map } from 'rxjs';
import { cartStore } from '../state/cart.store';
import { mockOrder } from '../state/mock-data';
import { Order } from '../order/order.model';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { OrdersService } from '../order/orders.service';
import { OrderEventResponse } from '../order/order-event-response';
import { CheckoutResponseComponent } from '../checkout-response/checkout-response.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [CheckoutFormComponent, CheckoutResponseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent implements OnInit {
  fb = inject(FormBuilder);
  cart = inject(cartStore);
  os = inject(OrdersService);

  order: Order = new Order();
  response: OrderEventResponse | null = null;

  ngOnInit() {
    const items$ = this.cart.getItems$();
    const total$ = this.cart.getTotal$();

    combineLatest([items$, total$]).pipe(
      map(([items, total]) => {
        return Object.assign(new Order(), mockOrder, { items: [...items] }, { total: total });
      })
    ).subscribe(o => this.order = o);
  }

  completeCheckout(o: Order) {
    this.os.checkout(o).subscribe(orderResponse => {
      this.response = orderResponse;
      this.cart.clear();
    });
  }
}