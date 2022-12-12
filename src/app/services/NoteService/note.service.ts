import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
 token: any;
  constructor(private httpService: HttpService) { 

  }

createNote(payload: any){
  this.token= localStorage.getItem('token')
let header ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     Authorization: this.token,
  })
};
return this.httpService.postService("/notes/addNotes", payload, true, header)
}

getAllNotes(){
  this.token= localStorage.getItem('token')
  let header ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token,
    })
  };
  return this.httpService.getService("/notes/getNotesList" ,true, header)
}

trashAllNote(payload:any){
  this.token= localStorage.getItem('token')
  let header={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token,
  })
};
return this.httpService.postService("/notes/trashNotes",payload,true, header)
}
}