import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-note',
  templateUrl: './empty-note.component.html',
  styleUrls: ['./empty-note.component.scss']
})
export class EmptyNoteComponent implements OnInit {
  title:any;
  description:any;

 ngOnInit(): void {
   
 }

 closeDialog(){
  
 }
}
