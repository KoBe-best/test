import { Component, OnInit } from '@angular/core';
import {products} from '../../../core/products';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public gridData: any[] = products;
  constructor() { }

  ngOnInit() {
  }

}
