import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  dependencies: any;
  features: any;

  constructor() {
    this.dependencies = {
      frontend: [
        { name: 'Angular 10.0.4' },
        { name: 'Angular CLI 10.0.3' },
        { name: 'Angular Universal 10.0.1' },
        { name: 'Font Awesome 5.14.0' },
        { name: 'Bootstrap 4.5.0' },
        { name: 'JQuery 3.5.1' },
      ],
      backend: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'pg-promise' },
      ]
    };

    this.features = {
      frontend: [
        {
          name: 'Angular CLI',
          englishTutorial: 'https://www.kingofdevs.com/tutorials/getting-started-with-angular',
          frenchTutorial: 'https://www.kingofdevs.com/tutorials/demarrer-avec-angular',
        },
        {
          name: 'Routing',
          englishTutorial: 'https://www.kingofdevs.com/tutorials/routing-with-angular',
          frenchTutorial: 'https://www.kingofdevs.com/tutorials/routing-avec-angular',
        },
        {
          name: 'Lazy loading',
          englishTutorial: 'https://www.kingofdevs.com/tutorials/lazy-loading-with-angular',
          frenchTutorial: 'https://www.kingofdevs.com/tutorials/lazy-loading-avec-angular',
        },
        {
          name: 'Bootstrap',
          englishTutorial: 'https://www.kingofdevs.com/tutorials/bootstrap-with-angular',
          frenchTutorial: 'https://www.kingofdevs.com/tutorials/bootstrap-avec-angular',
        },
        {
          name: 'Server side Rendering',
          englishTutorial: 'https://www.kingofdevs.com/tutorials/server-side-rendering-with-angular-universal',
          frenchTutorial: 'https://www.kingofdevs.com/tutorials/server-side-rendering-avec-angular-universal',
        },
        {
          name: 'HTTPClient',
          englishTutorial: 'https://www.kingofdevs.com/tutorials/httpclient-with-angular',
          frenchTutorial: 'https://www.kingofdevs.com/tutorials/httpclient-avec-angular',
        },
        {
          name: 'Transfer State',
          englishTutorial: 'https://www.kingofdevs.com/tutorials/transfer-state-with-angular',
          frenchTutorial: 'https://www.kingofdevs.com/tutorials/transfer-state-avec-angular',
        },
        {
          name: 'Progressive Web App',
          englishTutorial: 'https://www.kingofdevs.com/tutorials/progressive-web-app-with-angular',
          frenchTutorial: 'https://www.kingofdevs.com/tutorials/progressive-web-app-avec-angular',
        },
        {
          name: 'Search Engine optimization',
          englishTutorial: 'https://www.kingofdevs.com/tutorials/search-engine-optimization-with-angular',
          frenchTutorial: 'https://www.kingofdevs.com/tutorials/search-engine-optimization-avec-angular',
        },
        {
          name: 'Components',
          englishTutorial: null,
          frenchTutorial: 'https://www.kingofdevs.com/tutorials/components-avec-angular',
        },
        {
          name: 'Services',
          englishTutorial: null,
          frenchTutorial: 'https://www.kingofdevs.com/tutorials/services-avec-angular',
        },
        {
          name: 'Responsive Images List',
          englishTutorial: null,
          frenchTutorial: null,
        },
      ],
      backend: [
        { name: 'Local JSON' },
        { name: 'RESTFull API' },
        { name: 'CRUD API' },
        { name: 'Database Creation' },
        { name: 'Data Import' },
        { name: 'Data Export' },
      ]
    };

  }

}
