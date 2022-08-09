import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PagesRoutingModule } from './pages-routing.module';
import { FilmsComponent } from './films/films.component';
import { PlanetsComponent } from './planets/planets.component';
import { RacesComponent } from './races/races.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule.forChild(),
  ]
})
export class PagesModule { }
