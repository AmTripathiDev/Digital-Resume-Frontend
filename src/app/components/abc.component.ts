import {Component} from '@angular/core';

@Component({
  selector: 'app-abc',
  template: `<h3>{{'Welcome!'}} {{userName}} with id: {{userId}}
    load with function: {{getUserName()}}</h3>
  <button [disabled]="!isButtonDisabled">Disable me</button>
  `,
  styles: [``]
})
export class AbcComponent {
  userName = 'shagun';
  userId = 10;
  isButtonDisabled = true;

  getUserName() {
    return this.userName;
  }
}
