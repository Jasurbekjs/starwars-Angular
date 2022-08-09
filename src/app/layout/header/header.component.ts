import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  langs = [ 'RU', 'EN'];

  langValue = new FormControl('EN');

  pages = [
    {name: 'CHARACTERS', link:'/characters'},
    {name: 'FILMS', link:'/films'},
    {name: 'PLANETS', link:'/planets'},
    {name: 'RACES', link:'/races'},
  ]
  open = false;
  currentRoute!: string;

  destroy$ = new Subject();

  constructor(private translate: TranslateService, private router: Router){}

  ngOnInit(): void {
    this.setupListeners();
    this.currentRoute = this.router.url;
  }
  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  routePage(link: string){
    this.router.navigate([link]);
  }

  setupListeners(){
    this.langValue.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((v)=>{
      switch(v){
        case 'RU': this.translate.use('ru'); break;
        case 'EN': this.translate.use('en'); break;
      }
    });
    this.router.events.pipe(takeUntil(this.destroy$), filter(e => e instanceof NavigationEnd)).subscribe((r)=>{
      this.currentRoute = (r as NavigationEnd).url;
    })
  }

}
