import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProtectComponent } from './protect/protect.component';
import { Aboutcovid19Component } from './aboutcovid19/aboutcovid19.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { SpreadComponent } from './spread/spread.component';
import { CovidashComponent } from './covidash/covidash.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent },
  {path: 'protect', component: ProtectComponent },
  {path: 'about', component: Aboutcovid19Component },
  {path: 'symptoms', component: SymptomsComponent },
  {path: 'spread', component: SpreadComponent },
  {path: 'covidash', component: CovidashComponent },
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
