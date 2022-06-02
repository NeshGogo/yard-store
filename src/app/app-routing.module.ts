import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then((m) => m.CmsModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'categories',
        component: CategoryComponent,
      },
      {
        path: 'categories/:id',
        component: CategoryComponent,
      },
      {
        path: 'products/:id',
        component: ProductDatailComponent,
      },
      {
        path: 'cart',
        component: MycartComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'recovery',
        component: RecoveryComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
