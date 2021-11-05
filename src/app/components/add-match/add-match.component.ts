import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from '../../shared/service/match.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Match } from '../../shared/models/match';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match: Match = new Match('','','','');
  counter = [0, 1, 2];
  //public matchs: any[] = [];
  public data: any;
  id:any ;
  title:string='Add';
  addMatchForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private matchservice: MatchService, private router: Router , private activatedroute : ActivatedRoute) { }

  ngOnInit() {


    this.id = this.activatedroute.snapshot.paramMap.get('id');
    if(this.id){
      this.matchservice.getMatchById(this.id).subscribe(
        (data:Match)=>{
          this.match=data;
        }
      )
      this.title='Edit';
    }
    this.addMatchForm = this.formBuilder.group({
      scoreOne:[''],
      scoreTwo:[''],
      teamOne:[''],
      teamTwo:[''],
    });

    // this.data = JSON.parse(localStorage.getItem('matchs'));

  }

  
  addEditMatch() {

    console.log(' her match',this.match);

    if (this.id) {
      //update match
      this.matchservice.editMatch(this.match).subscribe(
        ()=>{
          console.log('match edited with success');

        }
      );
      this.router.navigate(['admin']);

    }
    else {
      //add match

      this.matchservice.addMatch(this.match).subscribe(
        ()=>{
          console.log('match added with success');

        }
      );
      this.router.navigate(['admin']);
    }
  }


    // let matchs =[];
    // if(localStorage.getItem('matchs')){
    //  matchs = JSON.parse(localStorage.getItem('matchs'));
    //  matchs.push(this.match);
    // }else{
    //   matchs =[this.match];
    // }
    //     localStorage.setItem('matchs',JSON.stringify(matchs));
    //     location.reload();   '
    // let matches = JSON.parse(localStorage.getItem("matchs") || '[]');
    // let matchID = JSON.parse(localStorage.getItem("matchs") || '1');
    // this.match.id = matchID ;
    // matches.push(this.match);
    // localStorage.setItem('matchs', JSON.stringify(matches))
    // localStorage.setItem('matchID',matchID+1)
    //   }
    // sup(){
    //   const storageTmp = JSON.parse(localStorage.getItem("matchs"));
    //   var index = this.counter.indexOf(1);
    //   storageTmp.splice(index , 1);
    //   //console.log(storageTmp) }
    //   localStorage.setItem('matchs',JSON.stringify(storageTmp));
    //   location.reload(); 

    // }

  }
