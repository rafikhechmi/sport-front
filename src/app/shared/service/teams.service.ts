import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teamURL:string="http://localhost:8080/api/teams";
  constructor(private httpclient : HttpClient) { }
  getallTeams(){

  }
  getTeamById(id){
  return this.httpclient.get(`${this.teamURL}/${id}`);
  }
  getMactch(){
    return this.httpclient.get(this.teamURL);
  }
  addTeam(team){
    return this.httpclient.post(this.teamURL,team);
  }
  editTeam(team){
    return this.httpclient.put(this.teamURL,`${this.teamURL}/${team.id}`,team);
  
  }
  delateTeam(id){
    return this.httpclient.delete(`${this.teamURL}/${id}`);
  
  }
}
