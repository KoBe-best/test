import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor(private router: Router) { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 99, 1.5, '这是第一个商品', ['电子','书籍']),
      new Product(2, '第二个商品', 88, 3.5, '这是第二个商品', ['远程','软件']),
      new Product(3, '第三个商品', 66, 4.5, '这是第三个商品', ['桌面','电子']),
      new Product(4, '第四个商品', 188, 5, '这是第四个商品', ['软件','视频']),
      new Product(5, '第五个商品', 288, 2, '这是第五个商品', ['硬件','书籍']),
      new Product(6, '第六个商品', 108, 1, '这是第六个商品', ['软件','视频']),
      new Product(7, '第七个商品', 48, 5, '这是第七个商品', ['硬件','软件']),
      new Product(8, '第八个商品', 78, 4, '这是第八个商品', ['桌面','远程']),
      new Product(9, '第九个商品', 99, 5, '这是第九个商品', ['远程','桌面']),
      new Product(10, '第十一个商品', 100, 3, '这是第十个商品', ['视频','电子']),
      new Product(11, '第十二个商品', 125, 2, '这是第十一个商品', ['桌面','软件']),
      new Product(12, '第十三个商品', 452, 1, '这是第十二个商品', ['硬件','远程']),
    ]
  }
  navigate(el){
    this.router.navigate(['main/product-detail',el.value]);
  }

}
export class Product {
  constructor (
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ) {

  }
}
