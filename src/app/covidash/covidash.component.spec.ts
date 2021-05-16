import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidashComponent } from './covidash.component';

describe('CovidashComponent', () => {
  let component: CovidashComponent;
  let fixture: ComponentFixture<CovidashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
