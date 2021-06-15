import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ICovidApi} from './icovid-api';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http : HttpClient) { }

  private apiurl : string = "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india";
 
  getCovidData() : Observable<any>
  {
   return this.http.get<any>(this.apiurl, { headers: {
        "x-rapidapi-key": "d100ff7668mshda7f41ca4792d9bp1f42dcjsn12bbdbc54c71",
        "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"}
      });
  }

  }
