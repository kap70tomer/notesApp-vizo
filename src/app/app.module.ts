import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { Footer } from './components/Footer/footer.component';
import { Header } from './components/Header/header.component';
import { LayoutComponent } from './components/Layout/layout.component';
import { LoginComponent } from './components/Login/login.component';
import { HomeComponent } from "./components/Home/HomeComponent";
import { AdminComponent } from './components/Admin/admin.component';
import { NoteComponent } from './components/Note/note.component';
import { FirebaseService } from './services/firebase.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    Header,
    Footer,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    AdminComponent,
    NoteComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RoutingModule,
  ],
  providers: [FirebaseService],
  bootstrap: [LayoutComponent]  
})
export class AppModule { } 
