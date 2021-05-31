import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-covidash',
  templateUrl: './covidash.component.html',
  styleUrls: ['./covidash.component.css']
})
export class CovidashComponent implements OnInit {

  constructor(private http: HttpService) { }
public coviddata: [];
  ngOnInit(): void {
    this.http.test();
    this.http.getCovidData().subscribe({
      next: data => {this.coviddata = data},
      error: error => {console.log(error)},
      complete: () => console.log(this.coviddata)
    });
    

    
      
 
  }

}
