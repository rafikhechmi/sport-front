import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any=[];
  constructor() { }

  ngOnInit() {
  //   this.matches=[
  //     {id:1,teamOne:'FCB', teamTwo:'RMD', scoreOne:2,scoreTwo:3},
  //     {id:2,teamOne:'CA', teamTwo:'EST', scoreOne:1,scoreTwo:3},
  //     {id:3,teamOne:'JUV', teamTwo:'ROM', scoreOne:4,scoreTwo:2},
  //     {id:4,teamOne:'LIV', teamTwo:'DOR', scoreOne:2,scoreTwo:2},
  //  ];
  this.matches = JSON.parse(localStorage.getItem('matchs'));
  }

}
