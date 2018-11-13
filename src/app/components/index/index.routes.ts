import {Routes} from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ProductDetailComponent } from './main/product-detail/product-detail.component';

export const ROUTER_CONFIG: Routes = [
  { path:'', component: HomeComponent },
  { path:'main/product-detail/:prodTitle',component: ProductDetailComponent }
];
