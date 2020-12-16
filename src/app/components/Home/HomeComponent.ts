import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/Note';
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
   let ob = this.notesService.getMyNotes();
   ob.then(res => console.log('please be my notes: '+res),
   err=>console.error(err));
  };
};

