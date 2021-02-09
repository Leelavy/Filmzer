import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { UsersComponent } from './components/users/users.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { EditProfileComponent } from './components/dashboard/profile/edit-profile/edit-profile.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { DetailsmovieComponent } from './components/movies/detailsmovie/detailsmovie.component';



const routes: Routes = [

  {
    path: 'movies', component: MoviesComponent,
    children: [
      { path: "addMovie", component: AddMovieComponent },
      { path: "detailsMovie", component: DetailsmovieComponent }
    ]
  },

  { path: 'statistics', component: StatisticsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'statistics', component: StatisticsComponent },
  {
    path: 'users', component: UsersComponent,
    children: [
      { path: "addUser", component: AdduserComponent }
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: '', redirectTo: "/dashboard", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
