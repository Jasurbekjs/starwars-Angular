import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets.component';
import { TuiDataListWrapperModule, TuiInputDateModule, TuiInputModule, TuiIslandModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiAlertModule, TuiButtonModule, TuiDataListModule, TuiDialogModule, TuiGroupModule, TuiLoaderModule, TuiRootModule, TuiScrollbarModule } from '@taiga-ui/core';
import { PlanetFormComponent } from './planet-form/planet-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetFormComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    TranslateModule.forChild(),

    TuiIslandModule,
    TuiLoaderModule,
    TuiButtonModule,
    TuiGroupModule,
    TuiScrollbarModule,
    TuiInputModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiInputDateModule,

    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlanetsModule { }
