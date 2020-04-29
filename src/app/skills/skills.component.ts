import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills-service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  allSkills = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.allSkills = this.skillsService.getSkills();
  }

}
