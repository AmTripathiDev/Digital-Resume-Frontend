import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';

const data = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatDialogModule,
  MatSelectModule,
  MatOptionModule
];

@NgModule({
  imports: data,
  exports: data
})

export class MaterialModule {
}
