import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/shared/service/match.service';

@Component({
  selector: 'app-dispaly-match',
  templateUrl: './dispaly-match.component.html',
  styleUrls: ['./dispaly-match.component.css']
})
export class DispalyMatchComponent implements OnInit {
id:any;
matches:any=[];
  constructor( private activatedRoute :ActivatedRoute , private matchesservice : MatchService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  this.matchesservice.getMatchById(this.id).subscribe(res => {
    this.matches = res ;

  });
  //     this.matches = res;
  //     localStorage.setItem('matchs',JSON.stringify(res));
  //     let findmatche = this.matches.find(el => el.id == this.id);
  //     console.log(findmatche );
  //     console.log(res);
  // }, error => {
  //     console.log(error);
  // });

   

 
  }
}
