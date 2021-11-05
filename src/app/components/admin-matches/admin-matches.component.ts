import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MatchService } from 'src/app/shared/service/match.service';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {
  matches :any ;
  constructor(private router : Router , private matchesservice : MatchService) { }

  ngOnInit() {
 

   this.matchesservice.getMactch().subscribe(res => {
    this.matches = res;
    localStorage.setItem('matchs',JSON.stringify(res));
    console.log(res);
}, error => {
    console.log(error);
});
}
  
  
  gotoDisplay(x){
  this.router.navigate([`displaymatch/${x}`])
  }
  gotoedite(x){
    this.router.navigate([`editMatch/${x}`])
  }
  
  delateMatche(x){
    this.matchesservice.delateMatch(x).subscribe(
      ()=>{
        console.log('Deleted withe Success');
        this.matchesservice.getMactch().subscribe(
          res =>{
            this.matches = res;
            console.log(res);
          }
        )
      }
    )
  }
}
