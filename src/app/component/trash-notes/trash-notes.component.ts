import { provideCloudinaryLoader } from '@angular/common';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})

export class TrashNotesComponent implements OnInit {
noteArray=[]
  constructor(private note: NoteService){

  }
  ngOnInit(): void {
    this.trashNotes()
  }
  
  trashNotes(){
    this.note.trashAllNote(provideCloudinaryLoader).subscribe((response: any )=>{
      console.log(response);
      this.noteArray=response.data.data
      console.log(this.noteArray);

    })
  }
}
