import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  url: string = '';
  // we can customise the input name like this
  @Input('url') set setUrl(value: string) {
    this.url = value;
    console.log('only url changed', this.url);
    //some code after change.
  }
  @Input() alt = '';
  @Output() onLoadedTest = new EventEmitter<string>();
  defaultUrl = './assets/img/default.png';
  counter = 0;
  counterFn: undefined | number;

  constructor() {
    console.log('constructor');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', changes);
  }
  ngOnDestroy(): void {
    console.log('img was destroy');
    window.clearInterval(this.counterFn);
  }

  ngOnInit(): void {
    this.counterFn = window.setInterval(() => {
      this.counter++;
      console.log('run counter');
    }, 1000);
  }

  imgError(): void {
    this.url = this.defaultUrl;
  }

  isLoaded(): void {
    console.log('from child');
    this.onLoadedTest.emit(this.url);
  }
}
