import { Component, OnInit } from '@angular/core';
import Typed from '../../../node_modules/typed.js/src/typed';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Typing Animation (Typed.js)
    var typed = new Typed('#typed', {
      strings: ["I'm a Web Developer", "I'm Nouran Samy"],
      typeSpeed: 60,
      fadeOut: true,
      loop: true
    });
  }

}
