import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodContainerComponent } from './catalog/catalog-container/food-container.component';
import { FoodEditPageComponent } from './catalog/food-edit-page/food-edit-page.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { FoodShopContainerComponent } from './shop/shop-container/food-shop-container.component';

const routes: Routes = [
  { path: '', component: FoodShopContainerComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'catalog', component: FoodContainerComponent },
  { path: 'catalog/new', component: FoodEditPageComponent },
  { path: 'catalog/edit/:id', component: FoodEditPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodRoutingModule { }
