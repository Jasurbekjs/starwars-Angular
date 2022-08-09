import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RacesService } from 'src/app/api/services/races.service';
import { Race } from '../characters/characters.component';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {

  loading: boolean = false;

  items: Array<Race> = [];

  constructor(
    private racesService: RacesService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.loadRaces();
  }

  loadRaces(){
    this.loading = true;

    let queryParams = {
      page: 1,
      pageSize: 10
    }

    this.racesService.getRaces(queryParams).subscribe({
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
