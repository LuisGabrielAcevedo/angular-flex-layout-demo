import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular flex layout demo';
  routes: IRoute[] = [];
  constructor() {
    this.routes = [
      {
        name: 'Table example',
        path: '/table-example'
      },
      {
        name: 'Layout align',
        path: '/layout-align'
      }
    ];
  }
}

export interface IRoute {
  name: string;
  path: string;
}
