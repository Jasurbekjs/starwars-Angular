import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component'

import { Page404Component } from './layout/page404/page404.component'
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, 
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),   
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
