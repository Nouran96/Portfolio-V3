import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private projects = [
    {
      "id": 1,
      "title": "Neighbourhood Map",
      "category": "front-end",
      "deploy_link": "https://egypt-map-react.netlify.com",
      "github_link": "https://github.com/Nouran96/Neighbourhood-Map-Project",
      "technologies": [
        "HTML", "CSS", "ReactJS", "Mapbox Maps", "Wikimedia API"
      ],
      "image": "/assets/images/egypt-map-optimized.jpg"
    },
    {
      "id": 2,
      "title": "My Movies Tracking App",
      "category": "front-end",
      "deploy_link": "https://my-movies-app.netlify.com",
      "github_link": "https://github.com/Nouran96/My-Movies-React-App",
      "technologies": [
        "HTML", "CSS", "ReactJS", "TMDb API"
      ],
      "image": "/assets/images/my-movies-app-optimized.jpg"
    },
    {
      "id": 3,
      "title": "Dream Big Template",
      "category": "front-end",
      "deploy_link": "http://dreambig.bitballoon.com/",
      // "github_link": "https://github.com/Nouran96/Neighbourhood-Map-Project",
      "technologies": [
        "HTML", "CSS"
      ],
      "image": "/assets/images/dream-big-project-optimized.jpg"
    },
    {
      "id": 4,
      "title": "Memory Cards Game",
      "category": "front-end",
      "deploy_link": "http://memory-game96.bitballoon.com/",
      "github_link": "https://github.com/Nouran96/Memory-Game-Project",
      "technologies": [
        "HTML", "CSS", "Javascript"
      ],
      "image": "/assets/images/memory-game-project-optimized.png"
    },
    {
      "id": 5,
      "title": "Kare Donation Template Mockup",
      "category": "front-end",
      "deploy_link": "https://kare-donation-mockup.netlify.com/",
      // "github_link": "https://github.com/Nouran96/Neighbourhood-Map-Project",
      "technologies": [
        "HTML", "CSS", "Javascript"
      ],
      "image": "/assets/images/kare-template-optimized.jpg"
    },
    {
      "id": 6,
      "title": "Calculator",
      "category": "front-end",
      "deploy_link": "http://cranky-calculator96.bitballoon.com/",
      "github_link": "https://github.com/Nouran96/Calculator-App",
      "technologies": [
        "HTML", "CSS", "Javascript"
      ],
      "image": "/assets/images/calculator-project-optimized.png"
    },
    {
      "id": 7,
      "title": "Divisima Template Mockup",
      "category": "front-end",
      "deploy_link": "https://divisima.netlify.com",
      "github_link": "https://github.com/Nouran96/Divisima-Template",
      "technologies": [
        "HTML", "CSS", "Bootstrap", "jQuery"
      ],
      "image": "/assets/images/divisima_optimized.png"
    },
    {
      "id": 8,
      "title": "Random Quotes Machine",
      "category": "front-end",
      "deploy_link": "https://random-quotes-react.netlify.com/",
      // "github_link": "https://github.com/Nouran96/Neighbourhood-Map-Project",
      "technologies": [
        "HTML", "CSS", "ReactJS"
      ],
      "image": "/assets/images/random-quotes-machine.png"
    },
    {
      "id": 9,
      "title": "Weather App",
      "category": "back-end",
      "deploy_link": "https://nouran-weather-app.herokuapp.com",
      "github_link": "https://github.com/Nouran96/Weather-Node-App",
      "technologies": [
        "Handlebars", "CSS", "Bootstrap","NodeJS", "ExpressJS", "Darksky API"
      ],
      "image": "/assets/images/weather-app.png"
    },
    {
      "id": 9,
      "title": "E-Commerce Website",
      "category": "front-end",
      // "deploy_link": "https://nouran-weather-app.herokuapp.com",
      "github_link": "https://github.com/Nouran96/e-commerce-js",
      "technologies": [
        "HTML", "CSS", "Bootstrap", "Javascript", "API integration"
      ],
      "image": "/assets/images/e-commerce-website.png"
    },
  ];

  constructor() {}

  getProjects() {
    return this.projects;
  }
}
