import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() matchInput:any;
  constructor( ) { }

  ngOnInit() {
  }
  scoreResult(x,y){
    if (x>y) {
      return ['Win','green'];
    } else if(x<y) {
      return ['Loss','red'];
    }else{
      return ['Drow','blue'];
    }
    
  }
  

}
