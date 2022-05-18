import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  imgUrl = '';
  toggle = true;

  onloaded(url: string){
    console.log('From father', url);
  }

  toggleImage(): void{
    this.toggle = !this.toggle;
  }
}
