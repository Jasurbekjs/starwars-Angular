import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesFormComponent } from './races-form.component';

describe('RacesFormComponent', () => {
  let component: RacesFormComponent;
  let fixture: ComponentFixture<RacesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
