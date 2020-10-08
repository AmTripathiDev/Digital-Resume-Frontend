import {Component} from '@angular/core';

@Component({
  selector: 'app-abc',
  template: `
    <div>
      <label>Username</label>
      <input (input)="getUserName($event)" placeholder="Enter UserName"/>
      <button (click)="saveUserName()">Save Name</button>
      <h1>Your Username is: {{displayName}}</h1>
    </div>
  `,
  styles: [``]
})
export class AbcComponent {
  userName = '';
  displayName = '';

  getUserName(data) {
    this.userName = data.target.value;
  }

  saveUserName() {
    this.displayName = this.userName;
  }
}
