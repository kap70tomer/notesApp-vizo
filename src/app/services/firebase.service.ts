import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  isLoggedIn = false;
  
  constructor(public firebaseAuth: AngularFireAuth) {}

  // Anonimusly login lazy
  public async signInAnonymously(){
      await this.firebaseAuth.signInAnonymously()
      .then(res =>{
        this.isLoggedIn = true;  
        sessionStorage.setItem('user',JSON.stringify(res.user?.uid));
        alert(`Welcome,${res.user?.displayName||'Guest'}!`);//Welcome pop up. **bootstrap modal would look beter..
      })
      .catch(error => console.error(error));
  };

  // Email & Password login to FirebaseAuth. 
  public async signInWithEmailPassword(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      if(res.user?.uid){
        this.isLoggedIn = true;
        sessionStorage.setItem('user',res.user?.uid);
      }
      return this.isLoggedIn = false
    })
    .catch(err => console.error(err));
  };

  public async signOut(){
    this.firebaseAuth.signOut();
    sessionStorage.removeItem('user');
  }
};
