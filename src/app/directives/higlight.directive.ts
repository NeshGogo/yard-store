import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHiglight]',
})
export class HiglightDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
