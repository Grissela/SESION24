import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AbrirdialogComponent } from '../abrirdialog/abrirdialog.component';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{
  

  new_nombre!:string;
  constructor(public dialog: MatDialog){}

  ngOnInit(): void {
  }

  
  enviar(){
    const AbrirDialog={
      position:{right:'10px'},
      panelClass:['rotate-scale-up']

    };
    localStorage.setItem('nombre',this.new_nombre);
    this.dialog.open(AbrirdialogComponent, AbrirDialog);
  }
  
  }

