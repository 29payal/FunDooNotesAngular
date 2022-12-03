import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
title: any;
description: any;
isShow= false;

constructor(){

}
ngOnInit(): void {
  
}
Show() {
  this.isShow = true;
}
Close() {
  this.isShow = false;
  if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {
    console.log(this.title, this.description)
    let payload = {
      "title": this.title,
      "description": this.description
      
    }
    
  }
}
}
