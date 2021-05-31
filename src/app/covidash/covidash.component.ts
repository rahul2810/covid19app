import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-covidash',
  templateUrl: './covidash.component.html',
  styleUrls: ['./covidash.component.css']
})
export class CovidashComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.test();
    this.http.getCovidData().subscribe(data => console.log(data));
  }

}
