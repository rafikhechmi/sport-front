import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/shared/models/player';
import { PlayerService } from 'src/app/shared/service/player.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: Player = new Player('','','','');
  counter = [0, 1, 2];
  public data: any;
  id:any ;
  title:string='Add';

  constructor(private formBuilder: FormBuilder ,private playerService : PlayerService , private router: Router , private activatedroute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    if(this.id){
      this.playerService.getPlayerById(this.id).subscribe(
        (data:Player)=>{
          this.player=data;
        }
      )
      this.title='Edit';
    }
  }

  addEditplayer() {

    console.log(' her player',this.player);

    if (this.id) {
      //update match
      this.playerService.editPlayer(this.player).subscribe(
        ()=>{
          console.log('player edited with success');

        }
      );
      this.router.navigate(['admin']);

    }
    else {
      //add match

      this.playerService.addPlayer(this.player).subscribe(
        ()=>{
          console.log('player added with success');

        }
      );
      this.router.navigate(['admin']);
    }
  }





}
