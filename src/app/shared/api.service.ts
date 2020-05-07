import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notebook} from '../note/model/notebook';
import {Note} from '../note/model/note';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'http://localhost:8082/api';
  private ALL_NOTEBOOKS_URL = `${this.BASE_URL}\\notebooks`;
  private SAVE_UPDATE_NOTEBOOK = `${this.BASE_URL}\\notebooks`;
  private DELETE_NOTEBOOK = `${this.BASE_URL}\\notebooks\\`;
  private GET_ALL_NOTES = `${this.BASE_URL}\\notes`;
  private NOTES_BY_NOTEBOOK = `${this.BASE_URL}\\notes\\notebook\\`;
  private DELETE_NOTE_BY_ID = `${this.BASE_URL}\\notes\\`;
  private SAVE_UPDATE_NOTE = `${this.BASE_URL}\\notes`;

  constructor(private http: HttpClient) {
  }

  getAllNotebooks(): Observable<Notebook[]> {
    return this.http.get<Notebook[]>(this.ALL_NOTEBOOKS_URL);
  }

  putNotebook(notebook: Notebook): Observable<Notebook> {
    return this.http.put<Notebook>(this.SAVE_UPDATE_NOTEBOOK, notebook);
  }

  deleteNotebook(id: string): Observable<any> {
    return this.http.delete(this.DELETE_NOTEBOOK + id);
  }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.GET_ALL_NOTES);
  }

  getNotesByNotebook(notebookId: string): Observable<Note[]> {
    return this.http.get<Note[]>(this.NOTES_BY_NOTEBOOK + notebookId);
  }

  deleteNote(id: string): Observable<any> {
    return this.http.delete(this.DELETE_NOTE_BY_ID + id);
  }

  putNote(note: Note): Observable<Note> {
    return this.http.put<Note>(this.SAVE_UPDATE_NOTE, note);
  }

}
