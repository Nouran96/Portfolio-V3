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

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects();
  }

}
