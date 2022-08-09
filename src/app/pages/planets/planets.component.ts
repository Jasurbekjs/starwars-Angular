import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanetsService } from 'src/app/api/services/planets.service';
import { Planet } from '../characters/characters.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  loading: boolean = false;

  items: Array<Planet> = [];

  constructor(
    private planetsService: PlanetsService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.loadPlanets();
  }

  loadPlanets(){
    this.loading = true;

    let queryParams = {
      page: 1,
      pageSize: 10
    }

    this.planetsService.getPlanets(queryParams).subscribe({
      next: (result) => {
        this.items = result.items
      },
      error: (e) => { console.log(e)},
      complete: () => {
        this.loading = false
      }
    })
  }

}
