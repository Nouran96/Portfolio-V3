import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private projects = [
    {
      "id": 1,
      "title": "Neighbourhood Map",
      "category": ["front-end"],
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
      "category": ["front-end"],
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
      "category": ["front-end"],
      "deploy_link": "http://dreambig.bitballoon.com/",
      "github_link": "https://github.com/Nouran96/Dream-Big-Template",
      "technologies": [
        "HTML", "CSS"
      ],
      "image": "/assets/images/dream-big-project-optimized.jpg"
    },
    {
      "id": 4,
      "title": "Memory Cards Game",
      "category": ["front-end"],
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
      "category": ["front-end"],
      "deploy_link": "https://kare-donation-mockup.netlify.com/",
      "github_link": "https://github.com/Nouran96/Kare-Donation-Template",
      "technologies": [
        "HTML", "CSS", "Javascript"
      ],
      "image": "/assets/images/kare-template-optimized.jpg"
    },
    {
      "id": 6,
      "title": "Calculator",
      "category": ["front-end"],
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
      "category": ["front-end"],
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
      "category": ["front-end"],
      "deploy_link": "https://random-quotes-react.netlify.com/",
      "github_link": "https://github.com/Nouran96/Random-Quotes-Machine",
      "technologies": [
        "HTML", "CSS", "ReactJS"
      ],
      "image": "/assets/images/random-quotes-machine.png"
    },
    {
      "id": 9,
      "title": "Weather App",
      "category": ["back-end"],
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
      "category": ["front-end"],
      "deploy_link": "https://nouran-e-commerce.netlify.app",
      "github_link": "https://github.com/Nouran96/e-commerce-js",
      "technologies": [
        "HTML", "CSS", "Bootstrap", "Javascript", "API integration"
      ],
      "image": "/assets/images/e-commerce-website.png"
    },
    {
      "id": 10,
      "title": "Pharmacy System",
      "category": ["back-end"],
      // "deploy_link": "https://nouran-e-commerce.netlify.app",
      "github_link": "https://github.com/Nouran96/Pharmacy_System",
      "technologies": [
        "HTML", "CSS", "Bootstrap", "Laravel", "AdminLTE Dashboard"
      ],
      "image": "/assets/images/pharmacy_system.png"
    },
    {
      "id": 11,
      "title": "Bloggy",
      "category": ["back-end"],
      // "deploy_link": "https://nouran-e-commerce.netlify.app",
      "github_link": "https://github.com/Nouran96/Blogger_Django",
      "technologies": [
        "HTML", "CSS", "Bootstrap", "Django", "Summernote"
      ],
      "image": "/assets/images/bloggy.png"
    },
    {
      "id": 12,
      "title": "SouCom Ecommerce",
      "category": ["back-end"],
      "deploy_link": "https://ecommerce-zamn-rails.herokuapp.com",
      "github_link": "https://github.com/Nouran96/ecommerce_rails",
      "technologies": [
        "HTML", "CSS", "Bootstrap", "Rails", "jQuery"
      ],
      "image": "/assets/images/soucom-rails.png"
    },
    {
      "id": 13,
      "title": "SolarCo",
      "category": ["back-end", "front-end"],
      "deploy_link": "https://solarco.herokuapp.com",
      "github_link": "https://github.com/Nouran96/SolarCo",
      "technologies": [
        "HTML", "CSS", "Bootstrap", "Rails", "Angular"
      ],
      "image": "/assets/images/solarco.png"
    },
    {
      "id": 14,
      "title": "Maqam",
      "category": ["front-end"],
      "deploy_link": "http://maqam.io/",
      // "github_link": "https://github.com/Nouran96/Todo-App-Vue",
      "technologies": [
        "HTML", "SASS", "Next JS", "React JS"
      ],
      "image": "/assets/images/maqam.png"
    },
    {
      "id": 15,
      "title": "Todo App Vue",
      "category": ["front-end"],
      "deploy_link": "https://nouran96.github.io/Todo-App-Vue/",
      "github_link": "https://github.com/Nouran96/Todo-App-Vue",
      "technologies": [
        "HTML", "Tailwind CSS", "Vue JS"
      ],
      "image": "/assets/images/todo-app-vue.png"
    }
  ];

  constructor() {}

  getProjects() {
    return this.projects.reverse();
  }
}
