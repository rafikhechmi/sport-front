import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/shared/models/team';
import { TeamsService } from '../../shared/service/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team: Team = new Team('','','');
  counter = [0, 1, 2];
  public data: any;
  id:any ;
  title:string='Add';
  constructor( private teamsService:TeamsService ,private router: Router , private activatedroute : ActivatedRoute ) { }

  ngOnInit() {

    this.id = this.activatedroute.snapshot.paramMap.get('id');
    if(this.id){
      this.teamsService.getTeamById(this.id).subscribe(
        (data:Team)=>{
          this.team=data;
        }
      )
      this.title='Edit';
    }
  }

  addEditteam() {

    console.log(' her team',this.team);

    if (this.id) {
      //update match
      this.teamsService.editTeam(this.team).subscribe(
        ()=>{
          console.log('team edited with success');

        }
      );
      this.router.navigate(['admin']);

    }
    else {
      //add match

      this.teamsService.addTeam(this.team).subscribe(
        ()=>{
          console.log('team added with success');

        }
      );
      this.router.navigate(['admin']);
    }
  }

  }


