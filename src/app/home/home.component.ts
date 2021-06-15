import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {ICovidApi} from '../icovid-api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpService) { }
  public coviddata: ICovidApi;
  public showStats:boolean = false;
  ngOnInit(): void {
    this.http.getCovidData().subscribe({
      next: data => {this.coviddata = data},
      error: error => {console.log(error)},
      complete: () => {
        this.showStats = true;
        
      }
    });
  }


}
