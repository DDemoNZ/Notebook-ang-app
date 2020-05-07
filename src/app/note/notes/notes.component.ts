import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../model/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() note: Note;
  @Output() noteUpdated: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() noteDeleted: EventEmitter<Note> = new EventEmitter<Note>();

  constructor() { }

  ngOnInit(): void {
  }

  updateNote() {
    this.noteUpdated.emit(this.note);
  }

  deleteNote() {
    this.noteDeleted.emit(this.note);
  }

}
