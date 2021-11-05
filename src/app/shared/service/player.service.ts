import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL:string="http://localhost:8080/api/players";
  constructor(private httpclient : HttpClient) { }
  getallPlayeres(){

  }
  getPlayerById(id){
  return this.httpclient.get(`${this.playerURL}/${id}`);
  }
  getMactch(){
    return this.httpclient.get(this.playerURL);
  }
  addPlayer(player){
    return this.httpclient.post(this.playerURL,player);
  }
  editPlayer(player){
    return this.httpclient.put(this.playerURL,`${this.playerURL}/${player.id}`,player);
  
  }
  delatePlayer(id){
    return this.httpclient.delete(`${this.playerURL}/${id}`);
  
  }
}
