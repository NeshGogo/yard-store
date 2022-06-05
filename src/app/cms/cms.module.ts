import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { TaksComponent } from './pages/taks/taks.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GridComponent } from './pages/grid/grid.component';


@NgModule({
  declarations: [
    TaksComponent,
    LayoutComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
