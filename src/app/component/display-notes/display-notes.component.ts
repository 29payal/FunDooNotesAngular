import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit{

recieveNoteList :any;
title: any;
description: any;

constructor(public dialog: MatDialog){

}

ngOnInit(): void {
}

openDialog( notes:any ):void{
const dialogRef= this.dialog.open(DisplayNotesComponent,{
  width: '500px',
  height: 'auto',

});
dialogRef.afterClosed().subscribe(response=>{
  console.log('The dialog was closed',response)
});
}
}
