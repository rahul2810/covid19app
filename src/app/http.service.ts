import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ICovidApi} from './icovid-api';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http : HttpClient) { }

  test(){
    console.log("test service is active and works like a charm!!!");
  }

 

  private apiurl : string = "https://covid19india.p.rapidapi.com/getIndiaStateData";
 
  getCovidData() : Observable<ICovidApi>
  {
  return this.http.get<ICovidApi>(this.apiurl, { headers: {
        "x-rapidapi-key": "d100ff7668mshda7f41ca4792d9bp1f42dcjsn12bbdbc54c71",
        "x-rapidapi-host": "covid19india.p.rapidapi.com"}
      });
  }

  }
