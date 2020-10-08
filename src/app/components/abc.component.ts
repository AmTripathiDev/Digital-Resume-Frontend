import {Component} from '@angular/core';

@Component({
  selector: 'app-abc',
  template: `
    <div>
      <label>Username</label>
      <input [(ngModel)]="displayName" placeholder="Enter UserName"/>
      <h1>Your Username is: {{displayName}}</h1>
      <button (click)="changeName()">change Name</button>
    </div>
  `,
  styles: [``]
})
export class AbcComponent {
  displayName = '';


  changeName() {
    this.displayName = 'i am a new value';
  }
}
