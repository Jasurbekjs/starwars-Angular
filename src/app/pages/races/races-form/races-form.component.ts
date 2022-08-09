import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiAlertService } from '@taiga-ui/core';
import { RacesService } from 'src/app/api/services/races.service';

@Component({
  selector: 'app-races-form',
  templateUrl: './races-form.component.html',
  styleUrls: ['./races-form.component.scss']
})
export class RacesFormComponent implements OnInit {

  loading: boolean = false;

  pageType = 'ADD';
  currentID = 0;

  race: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private racesService: RacesService,
    private fb: FormBuilder,
    @Inject(TuiAlertService) private readonly alertService: TuiAlertService
  ) {
    this.race = this.createRace();
   }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']>0) {
      this.currentID = this.route.snapshot.params['id'];
      this.pageType = 'EDIT';

      this.loadFilm();
    }
  }

  loadFilm(){
    this.racesService.getRace(this.currentID).subscribe({
      next: (result) => {
        this.race.patchValue(result);
      },
    })
  }

  createRace(){
    return this.fb.group({
      id: [''],
      name: [''],
      height_average: [''],
      life_average: ['']
    })
  }


  cancel(){
    this.router.navigate(['/races'])
  }
  save(){
    if(this.pageType=='EDIT'){
      this.racesService.editRace(this.race.getRawValue()).subscribe({
        next: (result) => {
          if(result.status){
            this.alertService.open(`Successfully editing an entry`, {label: `Edit`}).subscribe();
            this.router.navigate(['/races']);
          }
        },
      })
    } else if(this.pageType=='ADD'){
      this.racesService.addRace(this.race.getRawValue()).subscribe({
        next: (result) => {
          if(result.status){
            this.alertService.open(`Successfully adding an entry`, {label: `Add`}).subscribe();
            this.router.navigate(['/races']);
          }
        },
      })
    }
  }

}

