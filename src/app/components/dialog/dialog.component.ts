import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AbrirdialogComponent } from '../abrirdialog/abrirdialog.component';

export interface DialogData {
  new_name: string
  juego: string
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit{
  
  constructor(public dialogo: MatDialog){}

  ngOnInit(): void {
  }
  new_name!:string;
  juego!:string;

  AbrirDialog(): void {
    // abre la funcion abrirDialog el modal y se pasa los valores del modal
    const dialogRef = this.dialogo.open(AbrirdialogComponent, {
      data: {new_name: this.new_name, juego: this.juego},
    })
    dialogRef.afterClosed().subscribe(result =>{
      console.log('El dialogo se ha cerrado')
      //aqui envia el resultado
      this.juego = result
    })
  }
  
  }

