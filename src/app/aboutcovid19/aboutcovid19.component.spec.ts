import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutcovid19Component } from './aboutcovid19.component';

describe('Aboutcovid19Component', () => {
  let component: Aboutcovid19Component;
  let fixture: ComponentFixture<Aboutcovid19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aboutcovid19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aboutcovid19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
