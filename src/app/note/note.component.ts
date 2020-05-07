import {Component, OnInit} from '@angular/core';
import {Notebook} from './model/notebook';
import {ApiService} from '../shared/api.service';
import {Note} from './model/note';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notebooks: Notebook[] = [];
  notes: Note[] = [];
  selectedNotebook: Notebook;
  searchText: string;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllNotebooks();
    this.getAllNotes();
  }

  public getAllNotebooks() {
    this.apiService.getAllNotebooks().subscribe(
      res => {
        this.notebooks = res;
      },
      error => {
        alert('Something went wrong while trying to get all notebooks.');
      }
    );
  }

  createNotebook() {
    const newNotebook: Notebook = {
      name: 'NewNotebook',
      id: null,
      notes: []
    };

    this.apiService.putNotebook(newNotebook).subscribe(
      res => {
        newNotebook.id = res.id;
        this.notebooks.push(newNotebook);
      },
      error => {
        alert('Something went wrong while trying to save a notebook.');
      }
    );
  }

  updateNotebook(updatedNotebook: Notebook) {
    this.apiService.putNotebook(updatedNotebook).subscribe(
      res => {

      },
      error => {
        alert('Something went wrong while trying to update a notebook..');
      }
    );
  }

  deleteNotebook(notebook: Notebook) {
    if (confirm('Are you sure you want to delete the notebook?')) {
      this.apiService.deleteNotebook(notebook.id).subscribe(
        res => {
          const indexOfNotebook = this.notebooks.indexOf(notebook);
          this.notebooks.splice(indexOfNotebook, 1);
        },
        error => {
          alert('Something went wrong while trying to delete a notebook.');
        }
      );
    }
  }

  getAllNotes()  {
    this.apiService.getAllNotes().subscribe(
      res => {
        this.notes = res;
      },
      error => {
        alert('Something went wrong while trying to get all notes.');
      }
    );
  }

  deleteNote(note: Note) {
    if (confirm('Are you sure you want to delete the note?')) {
      this.apiService.deleteNote(note.id).subscribe(
        res => {
          const IndexOfDeletedNote = this.notes.indexOf(note);
          this.notes.splice(IndexOfDeletedNote, 1);
        },
        error => {
          alert('Something went wrong while trying to delete a note');
        }
      );
    }
  }

  createNote(notebookId: string) {
    const note: Note = {
      id: null,
      name: 'New note',
      text: 'Write text in here',
      category: '',
      notebookId
    };

    this.apiService.putNote(note).subscribe(
      res => {
        note.id = res.id;
        this.notes.push(note);
      },
      error => {
        alert('Something went wrong while trying to save a note');
      }
    );
  }

  selectNotebook(notebook: Notebook) {
    this.selectedNotebook = notebook;
    this.apiService.getNotesByNotebook(notebook.id).subscribe(
      res => {
        this.notes = res;
      },
      error => {
        alert('Something went wrong while trying to select a notebook and get notes from notebook');
      }
    );
  }

  updateNote(updatedNote: Note) {
    this.apiService.putNote(updatedNote).subscribe(
      res => {
      },
      error => {
        alert('Something went wrong while trying to update a note.');
      }
    );
  }

  selectAllNotes() {
    this.selectedNotebook = null;
    this.getAllNotes();
  }

}
