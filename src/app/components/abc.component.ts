import {Component} from '@angular/core';

@Component({
  selector: 'app-abc',
  template: `<h3>{{'Welcome!'}} {{userName}} with id: {{userId}}
    load with function: {{getUserName()}}</h3>`,
  styles: [``]
})
export class AbcComponent {
  userName = 'shagun';
  userId = 10;

  getUserName() {
    return this.userName;
  }
}
