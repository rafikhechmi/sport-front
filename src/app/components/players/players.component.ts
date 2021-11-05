import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
 
 players:any=[];
  constructor() { }

  ngOnInit() {
    this.players=[
      {id:1,name:"Ronaldo",poste:"attack"},
      {id:2,name:"Messi",poste:"attack"},
      {id:3,name:"Salah",poste:"attack"},
      {id:4,name:"Salah",poste:"attack"},
    ]
  }

}
