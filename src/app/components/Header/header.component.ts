import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header implements OnInit {

  constructor(private router: Router, private firebaseService:FirebaseService ) { }

  ngOnInit(): void { }

  public logOut(): void{
  this.firebaseService.signOut();
  this.router.navigate(['/login']);
  }
}
