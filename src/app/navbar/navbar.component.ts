import { Component, OnInit,HostListener, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog'; 
import { HelplineComponent } from '../helpline/helpline.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {}

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "100%";
    this.dialogRef.open(HelplineComponent,dialogConfig);
  }
 active: boolean = false;
  toggleNav(){
    if(!this.active)
     { this.active = true;} 
     else{
       this.active = false;
     }
  }
 

}
