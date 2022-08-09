import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';

import {TuiDataListWrapperModule, TuiInputModule, TuiIslandModule, TuiSelectModule} from '@taiga-ui/kit';
import {TuiAlertModule, TuiButtonModule, TuiDataListModule, TuiDialogModule, TuiGroupModule, TuiLoaderModule, TuiRootModule, TuiScrollbarModule} from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CharacterFormComponent } from './character-form/character-form.component';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterFormComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
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

    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class CharactersModule { }
