import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog'; 
import { HelplineComponent } from '../helpline/helpline.component';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "60%";
    this.dialogRef.open(HelplineComponent,dialogConfig);
  }
}
