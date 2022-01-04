import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {ICovidApi} from '../icovid-api';
import { AgGridModule } from 'ag-grid-angular';

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
  public stateArray2 = [];
  public activeArray = [];
  public confirmedArray = [];
  public deathsArray = [];
  public recoveredArray = [];
  public gridApi;
  public searchValue;
 

  public showStats:boolean = false;
  //color scheme
  public colorSchemeActive = {domain: ['#2DE0B4']};
  public colorSchemeConfirmed = {domain: ['#F79820']};
  public colorSchemeDeaths = {domain: ['#ED786B']}
  public colorSchemeRecovered = {domain: ['#2DABE0']};

  public columnDef = [
      {field: 'State',  sortable: true, filter: true, cellStyle: { 'text-align': 'left' }},
      {field: 'Updated', sortable: false, filter:false, cellStyle: { 'text-align': 'left' }},
      {field: 'Active', sortable: true, filter: true, cellStyle: { 'text-align': 'left' }},
      {field: 'Confirmed', sortable: true, filter: true, cellStyle: { 'text-align': 'left' }},
      {field: 'Deaths', sortable: true, filter: true, cellStyle: { 'text-align': 'left' }},
      {field: 'Recovered', sortable: true, filter: true, cellStyle: { 'text-align': 'left' }}];
  ngOnInit(): void {
function onGridReady(params){
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;
  
}
function quickSearch()
{
this.gridApi.setQuickFilter(this.searchValue);
}


    this.http.getCovidData().subscribe({
      next: data => {this.coviddata = data},
      error: error => {console.log(error)},
      complete: () => {
        
       
        this.lastUpdatedDate = this.coviddata.total_values.lastupdatedtime;
       
        for(let i in this.coviddata.state_wise)
        {  
          this.stateArray.push(this.coviddata.state_wise[i]); //This feeds statewise data
        }
      
      //Pushing data to stateArray2 for Data Table
        for(let i in this.stateArray){
          
            let stateStat = 
              {'State' :this.stateArray[i].state, 
               'Updated' : this.stateArray[i].lastupdatedtime,
               'Active' : Number(this.stateArray[i].active),
               'Confirmed' : Number(this.stateArray[i].confirmed),
               'Deaths' : Number(this.stateArray[i].deaths),
               'Recovered' : Number(this.stateArray[i].recovered),

              };
              this.stateArray2.push(stateStat);
        }
      
        //Pushing data  for Chart

        for(let i in this.stateArray2){
          
          let activeStat = 
            {'name' :this.stateArray[i].state, 
             'value' : Number(this.stateArray[i].active),
            };
          let confirmedStat = 
            {'name' :this.stateArray[i].state, 
             'value' : Number(this.stateArray[i].confirmed),
            };
          let deathsStat = 
            {'name' :this.stateArray[i].state, 
             'value' : Number(this.stateArray[i].deaths),
            };
          let recoveredStat = 
            {'name' :this.stateArray[i].state, 
             'value' : Number(this.stateArray[i].recovered),
            };

            this.confirmedArray.push(confirmedStat);
            this.deathsArray.push(deathsStat);
            this.recoveredArray.push(recoveredStat);
            this.activeArray.push(activeStat);
      }


        // console.log(this.activeArray);
        this.showStats = true;
      }
    });
    

    
      
 
  }

}
