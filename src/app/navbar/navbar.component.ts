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



  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 60) {
       let element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('navbar');
        element.classList.remove('sticky'); 
     }
  } 

}
