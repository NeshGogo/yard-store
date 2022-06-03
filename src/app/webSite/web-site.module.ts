import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { WebSiteRoutingModule } from './web-site-routing.module';
import { SharedModule } from '../shared/shared.module';


import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
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
    NavComponent,
    HomeComponent,
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
    SharedModule,
  ]
})
export class WebSiteModule { }
