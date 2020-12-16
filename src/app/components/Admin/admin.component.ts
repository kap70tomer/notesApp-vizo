import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Note } from 'src/app/models/Note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  public currentNote:Note;
  public notes: any[];
  public text: string ="";

  constructor(private notesService:NotesService ) {
    this.notes = [];
    this.currentNote = {
      id:"",
      owner:"",
      description:"",
      title:""
    };
  }

  ngOnInit() {
  //When component is ready fetch via http service, All notes are for admin to see and edit.  
    let observableAll = this.notesService.getAllNotes();
      observableAll.then(res => { 
        res.subscribe(noteList =>{
          this.notes = noteList
          console.log(this.notes);   
        });
      });
  };
  //get Info from UI by cloning the clicked note details values.
  public loadClickedNoteInfo(clickedNote: Note){
    return this.currentNote = clickedNote;
  };
  //Delete request via note id
  async onDeleteClicked(clickedNote:Note){
    return this.notesService.delete(clickedNote.id);
  };
  async updateNote(currentNote:Note){
    return this.notesService.updateNote(currentNote).then(res=>{
      console.log(res);
    });
  };
  // initialize func for forms fields
  public initForm() {
    this.currentNote = {
      id:"",
      description:"",
      owner:"",
      title:"",
    };
  };
};
