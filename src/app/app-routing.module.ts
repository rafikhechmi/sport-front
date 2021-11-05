import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { SignupComponent } from './components/signup/signup.component';
import { DispalyMatchComponent } from './components/dispaly-match/dispaly-match.component';
import { AuthGuardService } from './shared/service/auth-guard.service';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'signup', component: SignupComponent},
  {path: 'matches', component: MatchesComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'addmatch', component: AddMatchComponent},
  {path: 'addteam', component: AddTeamComponent},
  {path: 'addplayer', component: AddPlayerComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'adminmatches', component: AdminMatchesComponent},
  {path: 'adminplayers', component: AdminPlayersComponent},
  {path: 'adminmatches', component: AdminMatchesComponent},
  {path: 'displaymatch/:id', component: DispalyMatchComponent},
  {path: 'editMatch/:id', component: AddMatchComponent},
  {path: 'editPlayer/:id', component: AddPlayerComponent},
  {path: 'editteam/:id', component: AddTeamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
