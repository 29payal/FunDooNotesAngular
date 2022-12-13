import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {

  @Input() noteCard: any;
  isDelete = false;
  isArchive = false;


  constructor(private note: NoteService) {
  }

  ngOnInit(): void {
this.isDelete= this.noteCard.isDeleted;
this.isArchive= this.noteCard.isArchived;
  }

  trash() {
    let payload = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    console.log(payload);
    this.note.trashAllNote(payload).subscribe((response: any) => {
      console.log(response)
    });
  }
  
  archive(){
    let payload={
      noteIdList : [this.noteCard.id],
    isArchived: true,
    }
    console.log(payload);
    this.note.archiveNotes(payload).subscribe((response:any)=>{
      console.log(response)
    });
  }

}
