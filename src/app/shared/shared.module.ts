import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';


import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { VowelSubstitutePipe } from './pipes/vowel-substitute.pipe';
import { HiglightDirective } from './directives/higlight.directive';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    ReversePipe,
    TimeAgoPipe,
    VowelSubstitutePipe,
    HiglightDirective,
    ProductComponent,
    ImgComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
  ],
  exports: [
    ReversePipe,
    TimeAgoPipe,
    VowelSubstitutePipe,
    HiglightDirective,
    ProductComponent,
    ImgComponent,
    ProductsComponent,
  ]
})
export class SharedModule { }
