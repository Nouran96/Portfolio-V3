import { Injectable } from '@angular/core';
import Skills from '../skills.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private skills = [
    {
      "category": "front-end",
      "name": "Front End",
      "data": [
        {
          "id": 1,
          "title": "HTML",
          "progress": 95
        },
        {
          "id": 2,
          "title": "CSS",
          "progress": 90
        },
        {
          "id": 3,
          "title": "SASS",
          "progress": 80
        },
        {
          "id": 4,
          "title": "Tailwind CSS",
          "progress": 80
        },
        {
          "id": 5,
          "title": "Bootstrap",
          "progress": 90
        },
        {
          "id": 6,
          "title": "Javascript",
          "progress": 95
        },
        {
          "id": 7,
          "title": "jQuery",
          "progress": 80
        },
        {
          "id": 8,
          "title": "ReactJs",
          "progress": 85
        },
        {
          "id": 9,
          "title": "Angular",
          "progress": 85
        },
        {
          "id": 10,
          "title": "Next JS",
          "progress": 80
        },
        {
          "id": 11,
          "title": "Vue JS",
          "progress": 80
        },
      ],
    },
    {
      "category": "back-end",
      "name": "Back End",
      "data": [
        {
          "id": 8,
          "title": "NodeJs",
          "progress": 75
        },
        {
          "id": 9,
          "title": "PHP",
          "progress": 80
        },
        {
          "id": 10,
          "title": "Laravel",
          "progress": 75
        },
        {
          "id": 11,
          "title": "Ruby on Rails",
          "progress": 75
        },
        {
          "id": 12,
          "title": "Python",
          "progress": 70
        },
        {
          "id": 13,
          "title": "Django",
          "progress": 70
        },
        {
          "id": 12,
          "title": "MySQL",
          "progress": 85
        },
        {
          "id": 13,
          "title": "MongoDB",
          "progress": 80
        },
        {
          "id": 12,
          "title": "Wordpress",
          "progress": 70
        },
        {
          "id": 12,
          "title": "Odoo",
          "progress": 70
        },
      ]
    },
    {
      "category": "general",
      "name": "General",
      "data": [
        {
          "id": 14,
          "title": "RESTful APIs",
          "progress": 90
        },
        {
          "id": 15,
          "title": "Git",
          "progress": 85
        },
        {
          "id": 16,
          "title": "Data Structures & Algorithms",
          "progress": 70
        },
        {
          "id": 17,
          "title": "Design Patterns",
          "progress": 75
        },
        {
          "id": 18,
          "title": "OOP Concepts",
          "progress": 85
        },
        {
          "id": 19,
          "title": "Docker",
          "progress": 70
        },
        {
          "id": 20,
          "title": "Unit Testing",
          "progress": 70
        },
        {
          "id": 21,
          "title": "Linux",
          "progress": 70
        }
      ]
    }
  ];

  constructor() { }

  getSkills() {
    return this.skills;
  }

  addFrontEndSkill(skill:Skills) {
    this.skills["front-end"].push(skill)
  }

  addBackEndSkill(skill:Skills) {
    this.skills["back-end"].push(skill)
  }
}
