import { Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'food',
        loadChildren: () => import('./food/food.module').then(m => m.FoodModule)
    }
];
