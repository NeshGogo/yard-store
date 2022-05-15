import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() url = '';
  @Output() onLoadedTest = new EventEmitter<string>();
  defaultUrl = './assets/img/default.png';

  constructor() { }

  ngOnInit(): void {
  }

  imgError(): void {
    this.url = this.defaultUrl;
  }

  isLoaded(): void {
    console.log('from child');
    this.onLoadedTest.emit(this.url);
  }
}
