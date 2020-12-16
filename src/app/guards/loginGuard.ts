import { Injectable, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  

  public constructor(private router: Router, public firebaseService:FirebaseService) {}

    public canActivate(): boolean {
        const isLoggedIn = this.firebaseService.isLoggedIn
        if(isLoggedIn) {  
            return true;
        }
        this.router.navigateByUrl("/login");
        return false;
    }

}