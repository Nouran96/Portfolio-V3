import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showTop:Boolean = false;

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (window.scrollY >= 145) {
      this.showTop = true;
    } else {
      this.showTop = false;
    }
  }

  goToTop() {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
  }
  // goToTop($elem):void {
  //     console.log($elem);
  //     $elem.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  // }
}
