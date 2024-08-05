import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

const material = [
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatDividerModule,
  MatStepperModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSelectModule
]

@NgModule({
  imports: [material],
  exports:[ material]
})
export class MaterialModule { }
