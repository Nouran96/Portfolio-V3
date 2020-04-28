import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  lightText:boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Decide navbar text color depending on page
    switch(this.router.url) {
      case '/':
      case 'home':
        this.lightText = true;
      default:
        this.lightText = false;
    }
  }

}
