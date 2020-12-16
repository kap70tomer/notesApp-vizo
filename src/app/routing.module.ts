import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/Home/HomeComponent';
import { AdminComponent } from './components/Admin/admin.component';
import { LoginComponent } from './components/Login/login.component';
import { NoteComponent } from './components/Note/note.component';
import { LoginGuard } from './guards/loginGuard';

const routes: Routes = [

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", canActivate: [LoginGuard], component: HomeComponent },
  { path: "admin", component: AdminComponent },
  { path: "login", component: LoginComponent },
  { path: "note/:id", component: NoteComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
