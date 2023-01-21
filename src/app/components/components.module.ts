import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbrirdialogComponent } from './abrirdialog/abrirdialog.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component'; 
@NgModule({
  declarations: [
    DialogComponent,
    AbrirdialogComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    DialogComponent,
    AbrirdialogComponent,
    HomeComponent
  ],
})
export class ComponentsModule { }
