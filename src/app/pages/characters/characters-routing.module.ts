import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterFormComponent } from './character-form/character-form.component';
import { CharactersComponent } from './characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  },
  {
    path:':id',
    component: CharacterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
