import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacesFormComponent } from './races-form/races-form.component';
import { RacesComponent } from './races.component';

const routes: Routes = [
  {
    path: '',
    component: RacesComponent
  },
  {
    path:':id',
    component: RacesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RacesRoutingModule { }
