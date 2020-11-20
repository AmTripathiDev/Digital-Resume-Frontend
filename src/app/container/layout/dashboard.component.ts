import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Hello i am dashboard component</h1>
    <router-outlet></router-outlet>
  `,
  styles: [``]
})

export class DashboardComponent {
  constructor() {
  }
}
