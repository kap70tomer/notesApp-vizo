import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../models/Note';
import { NotesService } from '../../services/notes.service';  

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  note!: Note; // undifined as "initial".
  @Output() edit = new EventEmitter();
  
  constructor(public noteServices: NotesService) { }

  ngOnInit(): void {
  }

  async onDeleteClicked(){
    let deleteNoteId = this.note.id;
    return this.noteServices.delete(deleteNoteId);
  }

  async onUpdateClicked(note: Note){
    return this.noteServices.updateNote(note);
  }

}
