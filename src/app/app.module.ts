import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './webSite/components/img/img.component';
import { ProductComponent } from './webSite/components/product/product.component';
import { ProductsComponent } from './webSite/components/products/products.component';
import { NavComponent } from './webSite/components/nav/nav.component';
import { ReversePipe } from './webSite/pipes/reverse.pipe';
import { TimeAgoPipe } from './webSite/pipes/time-ago.pipe';
import { VowelSubstitutePipe } from './webSite/pipes/vowel-substitute.pipe';
import { HiglightDirective } from './webSite/directives/higlight.directive';
import { SwiperModule } from 'swiper/angular';
import { TimeInterceptor } from './webSite/interceptors/time.interceptor';
import { TokenInterceptor } from './webSite/interceptors/token.interceptor';
import { HomeComponent } from './webSite/pages/home/home.component';
import { NotFoundComponent } from './webSite/pages/not-found/not-found.component';
import { CategoryComponent } from './webSite/pages/category/category.component';
import { MycartComponent } from './webSite/pages/mycart/mycart.component';
import { LoginComponent } from './webSite/pages/login/login.component';
import { RegisterComponent } from './webSite/pages/register/register.component';
import { RecoveryComponent } from './webSite/pages/recovery/recovery.component';
import { ProfileComponent } from './webSite/pages/profile/profile.component';
import { ProductDatailComponent } from './webSite/pages/product-datail/product-datail.component';
import { LayoutComponent } from './webSite/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: TimeInterceptor
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
