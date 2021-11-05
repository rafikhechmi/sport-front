import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { WorldCupComponent } from './components/world-cup/world-cup.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { ClassificationComponent } from './components/classification/classification.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';
import { AdminTeamsComponent } from './components/admin-teams/admin-teams.component';
import { AdminComponent } from './components/admin/admin.component';
import { DispalyMatchComponent } from './components/dispaly-match/dispaly-match.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AsterixPipe } from './shared/pipe/asterix.pipe';
import { LoginService } from './shared/service/login.service';
import { TokenInterceptorService } from './shared/service/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorldCupComponent,
    ResultComponent,
    NewsComponent,
    ClassificationComponent,
    VideosComponent,
    BlogComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    BannerComponent,

    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminPlayersComponent,
    AdminMatchesComponent,
    AdminTeamsComponent,
    AdminComponent,
    DispalyMatchComponent,
    AsterixPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
