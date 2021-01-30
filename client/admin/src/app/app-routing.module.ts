import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ MoviesComponent} from './components/movies/movies.component';
import{ ReviewsComponent} from './components/reviews/reviews.component';
import{ UsersComponent} from './components/users/users.component';
import{ StatisticsComponent} from './components/statistics/statistics.component';
import{ DashboardComponent} from './components/dashboard/dashboard.component';
import{ LoginComponent} from './components/login/login.component';
import{ AddMovieComponent} from './components/movies/add-movie/add-movie.component';
import{ CategoryComponent} from './components/category/category.component';
import{ AddCategoryComponent} from './components/category/add-category/add-category.component';


const routes: Routes = [
{ path: 'movies' , component: MoviesComponent},
{ path: 'reviews' , component: ReviewsComponent},
{ path: 'statistics' , component: StatisticsComponent},
{ path: 'users' , component: UsersComponent},
{ path: 'dashboard' , component: DashboardComponent},
{ path: 'login' , component: LoginComponent},
{ path: 'addMovie' , component: AddMovieComponent},
{ path: 'category' , component: CategoryComponent},
{ path: 'addCategory' , component: AddCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
