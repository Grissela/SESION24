import { Component,OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-abrirdialog',
  templateUrl: './abrirdialog.component.html',
  styleUrls: ['./abrirdialog.component.scss']
})
export class AbrirdialogComponent implements OnInit{
  
  new_play!:string;
  new_name!:string;
  constructor(public dialog: MatDialog){
    
  }
  ;

  enviar(){
    const AbrirDialog={
      position:{right:'10px'},
      panelClass:['rotate-scale-up']

    };
   
    this.dialog.open(AbrirdialogComponent, AbrirDialog);
    
  }

  ngOnInit(): void {
    this.new_name=String(localStorage.getItem('nombre'));
  }

  // dialogRef.afterClosed().subscribe(result => {
  //   console.log('The dialog was closed');
  //   this.new_play = result;
  // });



}
