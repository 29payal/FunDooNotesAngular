import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {


 @Input() noteArray=[]

  constructor(private note: NoteService){

  }
  
ngOnInit(): void {
  this.trash()
}

    trash(){
      this.note.getAllNotes().subscribe((response:any)=>{
        console.log(response);
        this.noteArray=response.data.data
        console.log(this.noteArray);
 
      })
      };
    }
