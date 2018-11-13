import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isLoading: boolean = false;
  selectedValue: Array<string> = ['电子','书籍','软件','视频','硬件','桌面','远程'];
  constructor() { }

  ngOnInit() {
  }
  load(){
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
