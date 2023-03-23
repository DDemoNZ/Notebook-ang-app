import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
// import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NoteComponent} from './note/note.component';
import { NotesComponent } from './note/notes/notes.component';
import { NoteTextFilterPipe } from './shared/note-text-filter.pipe';

const AppRoutes: Routes = [
  {
    path: '',
    component: NoteComponent
  },
  {
    path: '',
    component: NoteComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    // NotFoundComponent,
    NoteComponent,
    NotesComponent,
    NoteTextFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
