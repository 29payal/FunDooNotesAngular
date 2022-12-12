import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit{

@Input() recieveNoteList :any;
title: any;
description: any;
note:any;
constructor(){
}


ngOnInit(): void {
  
}
}
