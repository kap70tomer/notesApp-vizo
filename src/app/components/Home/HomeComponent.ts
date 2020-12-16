import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//Main content page
export class HomeComponent implements OnInit {
  
  //Array data model to maintain the recived notes.
  public notes: any[];
  
  constructor(public notesService:NotesService) {
   //Initilaize of components data model, whene injections are done and constractor is called.
    this.notes = [];
  }
  
  //After the component is loaded and ready use the component life cycle metahod to fecth the desired data,
  //cache it local on the component to diaplay on view. 
   ngOnInit(): void {
   let ob = this.notesService.getAllNotes();
   //Using 'Promise' to retrive response from server with an object,
   // wich can resolve or reject (could be positive or negative resolve or an error). 
   ob.then(res =>{
     let myNotes = res
     myNotes.subscribe(noteList=>{
        this.notes = noteList;
        console.log(this.notes)
      },
      err=>console.error(err))
    });
  };
};

