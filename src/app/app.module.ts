import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import {IndexModule} from './components/index/index.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './app.routes';
import {CoreModule} from './core/core.module';
import { FooterComponent } from './components/footer/footer.component';



registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MenuTopComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    IndexModule,
    // 路由模块最后导入
    RouterModule.forRoot(ROUTER_CONFIG),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
