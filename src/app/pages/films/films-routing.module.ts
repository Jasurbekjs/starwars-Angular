import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsFormComponent } from './films-form/films-form.component';
import { FilmsComponent } from './films.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent
  },
  {
    path:':id',
    component: FilmsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
