import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetFormComponent } from './planet-form/planet-form.component';
import { PlanetsComponent } from './planets.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent
  },
  {
    path:':id',
    component: PlanetFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
