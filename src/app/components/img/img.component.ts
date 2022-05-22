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
export class ImgComponent {
  url: string = '';
  // we can customise the input name like this
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('url') set setUrl(value: string) {
    this.url = value;
    //some code after change.
  }
  @Input() alt = '';
  @Output() loaded = new EventEmitter<string>();
  defaultUrl = './assets/img/default.png';

  constructor() {
  }

  imgError(): void {
    this.url = this.defaultUrl;
  }

  isLoaded(): void {
    this.loaded.emit(this.url);
  }
}
