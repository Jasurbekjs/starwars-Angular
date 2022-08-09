import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observer, Subject } from 'rxjs';
import { CharactersService } from 'src/app/api/services/characters.service';
import { FilmsService } from 'src/app/api/services/films.service';
import { PlanetsService } from 'src/app/api/services/planets.service';
import { RacesService } from 'src/app/api/services/races.service';

import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiAlertService, TuiDialogContext, TuiDialogService, TuiNotification} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface Character{
  id?: any;
  first_name: string;
  last_name: string;
  middle_name: string;
  birth_date: Date;
  gender: string;
  height: number;
  planet_id: number;
  race_id: number;
  films_id: number;
  created_at: Date;
  updated_at: Date;
}
export interface Planet{
  id?: any;
  name: string;
  diameter: string;
  created_at: Date;
  updated_at: Date;
}

export interface Race{
  id?: any;
  name: string;
  height_average: string;
  life_average: string;
  created_at: Date;
  updated_at: Date;
}

export interface Film{
  id?: any;
  name: string;
  budget: string;
  date: string;
  link: string;
  created_at: Date;
  updated_at: Date;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {

  loading: boolean = false;

  selectedItem!: Character;

  items: Array<Character> = [];
  planets: Array<Planet> = [];
  races: Array<Race> = [];
  films: Array<Film> = [];
  
  destroy$ = new Subject();

  constructor(
    private charactersService: CharactersService,
    private planetsService: PlanetsService,
    private racesService: RacesService,
    private filmsService: FilmsService,
    public router: Router,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(TuiAlertService) private readonly alertService: TuiAlertService
  ) { }

  ngOnInit(): void {
    this.loadPlanets();
    this.loadRaces();
    this.loadFilms();
    this.loadCharacters();
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  loadPlanets(){
    this.planetsService.getAllPlanets().subscribe({
      next: (result) => {
        this.planets = result
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

  async loadCharacters(){
    this.loading = true;

    let queryParams = {
      page: 1,
      pageSize: 10
    }

    this.charactersService.getCharacters(queryParams).subscribe({
      next: (result) => {
        this.items = result
      },
      error: (e) => { console.log(e)},
      complete: () => {
        this.loading = false
      }
    })
  }

  getRace(id: any){
    if(this.races.length===0) return id;
    return this.races.find(item=> item.id == id)
  }
  getPlanet(id: any){
    if(this.planets.length===0) return id;
    return this.planets.find(item=> item.id == id)
  }
  getFilm(id: any){
    if(this.films.length===0) return id;
    return this.films.find(item=> item.id == id)
  }

  deleteDialog(content: PolymorpheusContent<TuiDialogContext>, item: Character): void{
    this.selectedItem  = item;
    this.dialogService.open(content).subscribe();
  }
  cancelDelete(){
    
  }
  acceptDelete(observer: Observer<any>){
    this.charactersService.deleteCharacter(this.selectedItem).subscribe({
      next: (result) => {
        if(result.status){
          this.alertService.open('', {label: `Deleted`, status: TuiNotification.Warning}).subscribe();
          this.loadCharacters();
          observer.complete();
        }
      }
    })
    observer.complete();
  }

}
