import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RacesRoutingModule } from './races-routing.module';
import { RacesComponent } from './races.component';
import { TuiDataListWrapperModule, TuiInputDateModule, TuiInputModule, TuiIslandModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiAlertModule, TuiButtonModule, TuiDataListModule, TuiDialogModule, TuiGroupModule, TuiLoaderModule, TuiRootModule, TuiScrollbarModule } from '@taiga-ui/core';
import { RacesFormComponent } from './races-form/races-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RacesComponent,
    RacesFormComponent
  ],
  imports: [
    CommonModule,
    RacesRoutingModule,
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
export class RacesModule { }
