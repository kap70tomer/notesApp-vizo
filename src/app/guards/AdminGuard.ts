import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  

  public constructor(private router: Router, public firebaseService:FirebaseService) {}

    public canActivate(): boolean {
        let isAdminEmail = this.firebaseService.firebaseAuth.currentUser;
        console.log(isAdminEmail);
            if(isAdminEmail !== null){
                return true;
            };
        return false;
    };
};    
