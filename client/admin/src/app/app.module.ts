import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MoviesComponent } from './components/movies/movies.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { UsersComponent } from './components/users/users.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoryComponent } from './components/category/category.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { AccountSettingComponent } from './components/dashboard/profile/account-setting/account-setting.component';
import { EditProfileComponent } from './components/dashboard/profile/edit-profile/edit-profile.component';
const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ReviewsComponent,
    UsersComponent,
    StatisticsComponent,
    LoginComponent,
    DashboardComponent,
    CategoryComponent,
    AddMovieComponent,
    AddCategoryComponent,
    AccountSettingComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
