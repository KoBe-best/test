import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    GridModule
  ],
  exports: [
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule
  ],
  declarations: [],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule { }
