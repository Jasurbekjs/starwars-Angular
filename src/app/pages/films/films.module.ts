import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { TuiDataListWrapperModule, TuiInputDateModule, TuiInputModule, TuiIslandModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiAlertModule, TuiButtonModule, TuiDataListModule, TuiDialogModule, TuiGroupModule, TuiLoaderModule, TuiRootModule, TuiScrollbarModule } from '@taiga-ui/core';
import { FilmsFormComponent } from './films-form/films-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilmsComponent,
    FilmsFormComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
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
export class FilmsModule { }
