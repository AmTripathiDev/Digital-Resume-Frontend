import {Component} from '@angular/core';

@Component({
  selector: 'app-abc',
  template: `<h3>{{'Welcome!'}} {{userName}} with id: {{userId}}
    load with function: {{getUserName()}}</h3>
  <button (click)="toggleButton()" [disabled]="isButtonDisabled">{{isButtonDisabled ? "Enable me" : "Disable Me" }}</button>
  <button (click)="this.isButtonDisabled = false">Enable Button</button>
  `,
  styles: [``]
})
export class AbcComponent {
  userName = 'shagun';
  userId = 10;
  isButtonDisabled = false;

  getUserName() {
    return this.userName;
  }

  toggleButton() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
}
