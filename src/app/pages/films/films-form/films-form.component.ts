import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiAlertService } from '@taiga-ui/core';
import { FilmsService } from 'src/app/api/services/films.service';
import {TuiDay} from '@taiga-ui/cdk';

@Component({
  selector: 'app-films-form',
  templateUrl: './films-form.component.html',
  styleUrls: ['./films-form.component.scss']
})
export class FilmsFormComponent implements OnInit {

  loading: boolean = false;

  pageType = 'ADD';
  currentID = 0;

  film: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmsService: FilmsService,
    private fb: FormBuilder,
    @Inject(TuiAlertService) private readonly alertService: TuiAlertService
  ) {
    this.film = this.createFilm();
   }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']>0) {
      this.currentID = this.route.snapshot.params['id'];
      this.pageType = 'EDIT';

      this.loadFilm();
    }
  }

  loadFilm(){
    this.filmsService.getFilm(this.currentID).subscribe({
      next: (result) => {
        this.film.patchValue(result);
      },
    })
  }

  createFilm(){
    return this.fb.group({
      id: [''],
      name: [''],
      budget: [''],
      date: [new TuiDay(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())],
      link: ['']
    })
  }


  cancel(){
    this.router.navigate(['/films'])
  }
  save(){
    if(this.pageType=='EDIT'){
      this.filmsService.editFilm(this.film.getRawValue()).subscribe({
        next: (result) => {
          if(result.status){
            this.alertService.open(`Successfully editing an entry`, {label: `Edit`}).subscribe();
            this.router.navigate(['/films']);
          }
        },
      })
    } else if(this.pageType=='ADD'){
      this.filmsService.addFilm(this.film.getRawValue()).subscribe({
        next: (result) => {
          if(result.status){
            this.alertService.open(`Successfully adding an entry`, {label: `Add`}).subscribe();
            this.router.navigate(['/films']);
          }
        },
      })
    }
  }

}
