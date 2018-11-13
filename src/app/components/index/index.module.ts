import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { MainComponent } from './main/main.component';
import {CoreModule} from '../../core/core.module';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './main/product/product.component';
import { StarsComponent } from './main/stars/stars.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { ProductDetailComponent } from './main/product-detail/product-detail.component';
import { HomeComponent } from './main/home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTER_CONFIG } from './index.routes';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  declarations: [
    IndexComponent,
    MainComponent,
    SearchComponent,
    ProductComponent,
    StarsComponent,
    CarouselComponent,
    ProductDetailComponent,
    HomeComponent,
  ]
})
export class IndexModule { }
