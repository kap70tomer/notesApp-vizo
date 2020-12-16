import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/Note';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NotesService } from 'src/app/services/notes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public notes: Note[];
  constructor(public notesService:NotesService) {
    this.notes = [];
  }
   ngOnInit(): void {
    this.notesService.getMyNotes().then()
  };
};

