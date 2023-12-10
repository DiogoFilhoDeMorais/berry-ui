import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
<<<<<<< HEAD
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
=======
  { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
>>>>>>> b3a3f6d8e2541bda543e407c16f147b3e816c6e3
  { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
