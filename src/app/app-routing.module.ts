import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { CustomPreloadingStrategyService } from './services/custom-preloading-strategy.service';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./webSite/web-site.module').then((m) => m.WebSiteModule),
    data: {
      preload: true,
    }
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
    preloadingStrategy: QuicklinkStrategy,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
