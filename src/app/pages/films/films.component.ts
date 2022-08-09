import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/api/services/films.service';
import { Film } from '../characters/characters.component';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  loading: boolean = false;

  items: Array<Film> = [];

  constructor(
    private filmsService: FilmsService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(){
    this.loading = true;

    let queryParams = {
      page: 1,
      pageSize: 10
    }

    this.filmsService.getFilms(queryParams).subscribe({
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
