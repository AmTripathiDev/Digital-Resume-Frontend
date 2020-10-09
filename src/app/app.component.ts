import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Material Button</h1>
    <button mat-button color="accent">Normal</button>
    <button mat-raised-button color="primary">Raised</button>
    <button  mat-stroked-button color="warn">Stroked</button>
  `,
  styles: [`
  `]
})
export class AppComponent {
}

