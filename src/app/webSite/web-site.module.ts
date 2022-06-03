import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WebSiteRoutingModule } from './web-site-routing.module';

import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { VowelSubstitutePipe } from './pipes/vowel-substitute.pipe';
import { HiglightDirective } from './directives/higlight.directive';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDatailComponent } from './pages/product-datail/product-datail.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    VowelSubstitutePipe,
    HiglightDirective,
    HomeComponent,
    NotFoundComponent,
    CategoryComponent,
    MycartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDatailComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    WebSiteRoutingModule,
    SwiperModule,
  ]
})
export class WebSiteModule { }
