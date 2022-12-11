import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

isShow= false;
title:any;
description:any;
user:any;

constructor(private note: NoteService){

}
ngOnInit(): void {
  
}
Show() {
  this.isShow = true;
}
Close()
 {
  this.isShow = false;
    if((this.title != null && this.title !="") || (this.description !=null && this.description != "")){
      console.log(this.title, this.description)
      let payload = {
        "title" : this.title,
        "note" : this.description,
        "user" : this.user
      }
      this.note.createNote(payload).subscribe((response: any) =>{
        console.log(response)
      })
    }
  }
}