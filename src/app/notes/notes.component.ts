import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

/*
1) Add «Send to top» button
2) Implement sending data to server to add a note
*/


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  private notesUrl = 'http://localhost:8080/notes'; // URL to web api

  notes: Note[]/* = [
    {text:  'Note one' },
    {text:  'Note two'}
  ]*/;

  text: string;

  constructor(private http: Http) {
    this.getNotes().then(notes=>{
      this.notes=notes
      console.log(notes);
    });
  }

  ngOnInit() {
  }

  add() {
    let note = { text: this.text }
    this.notes.push(note);
    this.text = '';
  }

  remove(idx) {
    this.notes.splice(idx,1);
  }

  getNotes(): Promise<Note[]> {
    return this.http.get(this.notesUrl)
      .toPromise()
      .then(response => response.json() as Note[]);
  }
}

interface Note {
  text: string;
}
