import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {ICovidApi} from '../icovid-api';
@Component({
  selector: 'app-covidash',
  templateUrl: './covidash.component.html',
  styleUrls: ['./covidash.component.css']
})
export class CovidashComponent implements OnInit {

  constructor(private http: HttpService) { }
  public lastUpdatedDate: Date;
  public coviddata: ICovidApi;
  public stateArray = [];
  ngOnInit(): void {
    this.http.test();
    this.http.getCovidData().subscribe({
      next: data => {this.coviddata = data},
      error: error => {console.log(error)},
      complete: () => {
        
       
        this.lastUpdatedDate = this.coviddata.total_values.lastupdatedtime;
        for(let i in this.coviddata.state_wise)
        {
        
          let district = [];
   
          for(let j in this.coviddata.state_wise[i]["district"] )
          {
         
            
         
            let districtInfo = [];
            console.log(this.coviddata.state_wise[i]["district"][j])
            
            // for(let k in this.coviddata.state_wise[i]["district"][j])
            // {
            //   district["districtName"].push(j);
            //   districtInfo.push(this.coviddata.state_wise[i]["district"][j][k]);
            // }
         
          //  district.push( this.coviddata.state_wise[i]["district"]);
            // let districtName = Object.keys(this.coviddata.state_wise[i]["district"]);
            // tempArray.push("");
            // tempArray.push(this.coviddata.state_wise[j]);
          }
          // console.log(district[0]["East Garo Hills"]); //I'm Making some fundamental mistake here. No idea what
          this.stateArray.push(this.coviddata.state_wise[i]); //This feeds statewise data
        }
      
      }
    });
    

    
      
 
  }

}
