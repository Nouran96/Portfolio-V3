import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio-service/portfolio.service';
import Projects from './projects.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = [];
  filteredProjects = [];
  activeBtn:string = 'all';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
    this.filteredProjects = this.projects;
  }

  showAll() {
    this.activeBtn = 'all';
    this.filteredProjects = this.projects;
  }

  showFrontOnly() {
    this.activeBtn = 'front-end';
    this.filteredProjects = this.projects.filter((project) => project.category == 'front-end')
  }

  showBackOnly() {
    this.activeBtn = 'back-end';
    this.filteredProjects = this.projects.filter((project) => project.category == 'back-end')
  }

}
