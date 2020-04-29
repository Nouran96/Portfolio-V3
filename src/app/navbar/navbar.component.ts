import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  lightText:boolean;

  constructor(private router: Router) {
    // Change navbar text color dependant on url
    this.router.events.subscribe((route) => {
      if(route instanceof NavigationEnd){
         switch(route.url) {
           case '/home':
           case '/skills':
             this.lightText = true;
             break;
           default:
             this.lightText = false;
             break;
         }
      }
   });
  }

  ngOnInit(): void {}

}
