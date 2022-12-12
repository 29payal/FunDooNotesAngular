import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {

  @Input() noteCard: any;
  isDeleted = false;

  constructor(private note: NoteService) {
  }

  ngOnInit(): void {

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
}
