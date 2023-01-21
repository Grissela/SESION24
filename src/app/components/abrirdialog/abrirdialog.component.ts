import { Component,OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogData } from './../dialog/dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abrirdialog',
  templateUrl: './abrirdialog.component.html',
  styleUrls: ['./abrirdialog.component.scss']
})
export class AbrirdialogComponent implements OnInit{
  
  constructor(public dialogRef: MatDialogRef<AbrirdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }
  Cerrar(): void {
    this.dialogRef.close();
  }

 




}
