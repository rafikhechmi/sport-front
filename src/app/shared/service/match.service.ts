import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
matchURL:string="http://localhost:8080/api/matches";
  constructor(private httpclient:HttpClient) { }

getallMatches(){

}
getMatchById(id){
return this.httpclient.get(`${this.matchURL}/${id}`);

}
getMactch(){
  return this.httpclient.get(this.matchURL);
}
addMatch(match){
  return this.httpclient.post(this.matchURL,match);
}
editMatch(match){
  return this.httpclient.put(this.matchURL,`${this.matchURL}/${match.id}`,match);

}
delateMatch(id){
  return this.httpclient.delete(`${this.matchURL}/${id}`);

}

}
