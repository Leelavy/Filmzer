import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule  } from '@angular/common/http';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MoviesComponent } from './components/movies/movies.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { UsersComponent } from './components/users/users.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddMovieComponent } from './components/movies/add-movie/add-movie.component';
import { AccountSettingComponent } from './components/dashboard/profile/account-setting/account-setting.component';
import { EditProfileComponent } from './components/dashboard/profile/edit-profile/edit-profile.component';

import { SearchPipe } from './search.pipe';
import { FormsModule} from '@angular/forms';
import { environment } from '../environments/environment.prod';

const config: SocketIoConfig = { url: environment.filmzerUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ReviewsComponent,
    UsersComponent,
    StatisticsComponent,
    LoginComponent,
    DashboardComponent,
    AddMovieComponent,
    AccountSettingComponent,
    EditProfileComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
