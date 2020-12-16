import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Note } from '../models/Note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private db:AngularFirestore) {}
 
  //POST/ Add new record to notes Collection in firestore DB.
  async createNote(newNote: Note){
    return this.db.collection('/Notes').add(newNote)
    .then(res => console.log('A new Note has been added!'+ res))
    .catch(err => console.error('You got an error '+ err)
    );
  };
  //GET/ get all records of notes from db.
  async getAllNotes(){
    return this.db.collection('/Notes').valueChanges()
  };
  //GET/ retrive logged in users notes.
  async getMyNotes(){
    return this.db.collection('/Notes',ref=> ref.where('uid','==', sessionStorage.getItem('user'))).get();
  };
 //Delete/ delete a singel record by its id
  async delete(id:string){
   return this.db.collection('/Notes').doc(id).delete();
  };
 //PUT/ send new data on existing record to merge with or replace ex. 
  async updateNote(note:Note){
    return this.db.collection('/Notes').doc(note.id).set(note,{merge:true});
  };
  //Delete All Records
  async deleteAllNotes(){
    return this.db.collection('Notes');
  }
};
