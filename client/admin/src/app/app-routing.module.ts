import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { UsersComponent } from './components/users/users.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { EditmovieComponent } from './components/movies/editmovie/editmovie.component';
import { EditreviewComponent } from './components/reviews/editreview/editreview.component';
import { GroupbyComponent } from './components/movies/groupby/groupby.component';



const routes: Routes = [
  
  { path: 'movies', component: MoviesComponent},
  { path: "movies/:id", component: EditmovieComponent },
  { path: "addMovie", component: AddMovieComponent },
  { path: "groupByMovie", component: GroupbyComponent },


  { path: 'reviews', component: ReviewsComponent },
  { path: "reviews/:id", component: EditreviewComponent },

  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: EdituserComponent },
  { path: "addUser", component: AdduserComponent },

  { path: 'statistics', component: StatisticsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "/dashboard", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
