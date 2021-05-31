import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProtectComponent } from './protect/protect.component';
import { Aboutcovid19Component } from './aboutcovid19/aboutcovid19.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { SpreadComponent } from './spread/spread.component';
import { CovidashComponent } from './covidash/covidash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HelplineComponent } from './helpline/helpline.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtectComponent,
    Aboutcovid19Component,
    SymptomsComponent,
    SpreadComponent,
    CovidashComponent,
    HelplineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
