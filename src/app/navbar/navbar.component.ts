import { Component, OnInit,HostListener, Inject } from '@angular/core'; 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

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
