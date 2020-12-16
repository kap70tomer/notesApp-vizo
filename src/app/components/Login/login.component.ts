import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup;
  public email: FormControl;
  public password: FormControl;
  public isLoggedIn:Boolean = false;

  constructor(public firebaseService:FirebaseService, private router:Router) {
    // Initializing the from group
    this.loginForm = new FormGroup({});

    // Initializing form controls with validators
    this.password = new FormControl("", Validators.required);
    this.email = new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)]);
   }

  ngOnInit(): void {
  }
  
  async signInAnon(){
   //guest Login
      await this.firebaseService.signInAnonymously()
      .then(res => {
          this.router.navigate(['/home']);
      })
      .catch(err=>{
        console.error(err);
      });
  };
  

  async loginWithPassport(){
  //send values taken from ui inputs to fb service for http request handling. 
    await this.firebaseService.signInWithEmailPassword(this.email.value, this.password.value)
    .then(res =>{
      console.log(res);
      this.router.navigate(['/home']);
    })
    .catch(err => console.error(err)
    );
  };
};