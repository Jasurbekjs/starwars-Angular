import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiAlertService } from '@taiga-ui/core';
import { PlanetsService } from 'src/app/api/services/planets.service';

@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.scss']
})
export class PlanetFormComponent implements OnInit {

  loading: boolean = false;

  pageType = 'ADD';
  currentID = 0;

  planet: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private planetsService: PlanetsService,
    private fb: FormBuilder,
    @Inject(TuiAlertService) private readonly alertService: TuiAlertService
  ) {
    this.planet = this.createPlanet();
   }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']>0) {
      this.currentID = this.route.snapshot.params['id'];
      this.pageType = 'EDIT';

      this.loadFilm();
    }
  }

  loadFilm(){
    this.planetsService.getPlanet(this.currentID).subscribe({
      next: (result) => {
        this.planet.patchValue(result);
      },
    })
  }

  createPlanet(){
    return this.fb.group({
      id: [''],
      name: [''],
      diameter: ['']
    })
  }


  cancel(){
    this.router.navigate(['/planets'])
  }
  save(){
    if(this.pageType=='EDIT'){
      this.planetsService.editPlanet(this.planet.getRawValue()).subscribe({
        next: (result) => {
          if(result.status){
            this.alertService.open(`Successfully editing an entry`, {label: `Edit`}).subscribe();
            this.router.navigate(['/planets']);
          }
        },
      })
    } else if(this.pageType=='ADD'){
      this.planetsService.addPlanet(this.planet.getRawValue()).subscribe({
        next: (result) => {
          if(result.status){
            this.alertService.open(`Successfully adding an entry`, {label: `Add`}).subscribe();
            this.router.navigate(['/planets']);
          }
        },
      })
    }
  }

}

