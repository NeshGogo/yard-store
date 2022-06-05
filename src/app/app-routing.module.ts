import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./webSite/web-site.module').then((m) => m.WebSiteModule),
  },
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then((m) => m.CmsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
