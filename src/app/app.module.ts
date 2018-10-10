import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import { SectionComponent } from './section/section.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
