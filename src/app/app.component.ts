import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-video (editVideo)="onEdit()" title="video 1" desc="video 1 description" url="#"></app-video>
    <app-video (editVideo)="onEdit()" title="video 2" desc="video 2 description" url="#"></app-video>
  `,
  styles: [`
  `]
})
export class AppComponent {
  onEdit() {
    console.log('called edit button');
  }
}

