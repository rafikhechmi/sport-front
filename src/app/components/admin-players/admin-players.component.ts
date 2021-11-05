import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {
  player:any=[]
  constructor() { }

  ngOnInit() {
    this.player=[
       {id:1,teamOne:'FCB', teamTwo:'RMD', scoreOne:2,scoreTwo:3},
       {id:2,teamOne:'CA', teamTwo:'EST', scoreOne:1,scoreTwo:3},
       {id:3,teamOne:'JUV', teamTwo:'ROM', scoreOne:4,scoreTwo:2},
       {id:4,teamOne:'LIV', teamTwo:'DOR', scoreOne:2,scoreTwo:2},
   ];
  }


}
