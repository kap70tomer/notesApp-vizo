import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  private isME:string|undefined;

  public constructor(private router: Router, public firebaseService:FirebaseService){
    this.isME = "";
    }
    public canActivate(): boolean {
        let isAdminEmail = this.firebaseService.firebaseAuth.user;
        isAdminEmail.subscribe(a=> {
            console.log(a?.uid);
            this.isME = a?.uid
        })
            if (this.isME == "f7ZiU0lm7ralGicOKrPZlTDU5Bm1"){
                return true;
            };
            this.router.navigateByUrl('/login');
        return false;
    };
};    
