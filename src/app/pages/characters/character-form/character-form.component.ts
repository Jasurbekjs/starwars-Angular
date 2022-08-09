import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/api/services/characters.service';
import { Character, Film, Planet, Race } from '../characters.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PlanetsService } from 'src/app/api/services/planets.service';
import { RacesService } from 'src/app/api/services/races.service';
import { FilmsService } from 'src/app/api/services/films.service';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiItemsHandlersProvider} from '@taiga-ui/kit';
import { TuiAlertService } from '@taiga-ui/core';

const STRINGIFY_EMPLOYEE: TuiStringHandler<any> = (item) =>
`${item ? item.name: ''}`;

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss'],
  providers: [tuiItemsHandlersProvider({stringify: STRINGIFY_EMPLOYEE})],
})
export class CharacterFormComponent implements OnInit {

  loading: boolean = false;

  pageType = 'ADD';
  currentID = 0;

  character: FormGroup;

  planets: Array<Planet> = [];
  races: Array<Race> = [];
  films: Array<Film> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    private fb: FormBuilder,
    private planetsService: PlanetsService,
    private racesService: RacesService,
    private filmsService: FilmsService,
    @Inject(TuiAlertService) private readonly alertService: TuiAlertService
  ) { 
    this.character = this.createCharacter();
  }

  ngOnInit(): void {
    this.load();
    if(this.route.snapshot.params['id']>0) {
      this.currentID = this.route.snapshot.params['id'];
      this.pageType = 'EDIT';

      this.loadCharacter();
    }
  }

  async load(){
    this.loadPlanets();
    this.loadRaces();
    this.loadFilms();
  }

  async loadCharacter(){
    this.charactersService.getCharacter(this.currentID).subscribe({
      next: (result) => {
        this.character.patchValue(result);

        this.planets.map(planet=>{
          if(planet.id == this.character.get('planet_id')?.value){
            this.character.get('planet_id')?.setValue(planet);
          }
        })
        this.races.map(race=>{
          if(race.id == this.character.get('race_id')?.value){
            this.character.get('race_id')?.setValue(race);
          }
        })
        this.films.map(film=>{
          if(film.id == this.character.get('films_id')?.value){
            this.character.get('films_id')?.setValue(film);
          }
        })
      },
    })
  }

  loadPlanets(){
    this.planetsService.getAllPlanets().subscribe({
      next: (result: Planet[]) => {
        this.planets = result;
      },
    })
  }
  loadRaces(){
    this.racesService.getAllRaces().subscribe({
      next: (result) => {
        this.races = result
      },
    })
  }
  loadFilms(){
    this.filmsService.getAllFilms().subscribe({
      next: (result) => {
        this.films = result
      },
    })
  }
  
  createCharacter(){
    return this.fb.group({
      id: [''],
      first_name: [''],
      last_name: [''],
      middle_name: [''],
      birth_date: [''],
      gender: [''],
      height: [''],
      planet_id: [''],
      race_id: [''],
      films_id: [''],
      created_at: [''],
      updated_at: ['']
    })
  }

  cancel(){
    this.router.navigate(['/characters'])
  }
  save(){
    if(this.pageType=='EDIT'){
      this.charactersService.editCharacter(this.character.getRawValue()).subscribe({
        next: (result) => {
          if(result.status){
            this.alertService.open(`Successfully editing an entry`, {label: `Edit`}).subscribe();
            this.router.navigate(['/characters']);
          }
        },
      })
    } else if(this.pageType=='ADD'){
      this.charactersService.addCharacter(this.character.getRawValue()).subscribe({
        next: (result) => {
          if(result.status){
            this.alertService.open(`Successfully adding an entry`, {label: `Add`}).subscribe();
            this.router.navigate(['/characters']);
          }
        },
      })
    }
    
  }

}
