import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/interfaces/match';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-select-players',
  templateUrl: './select-players.component.html',
  styleUrls: ['./select-players.component.less']
})
export class SelectPlayersComponent implements OnInit {

  @Input() match: Match = new Match();

  players: any[] = [];
  cols: any;

  constructor(private playerService: PlayerServiceService) { }

  ngOnInit(): void {
    this.getScreenSize();
    this.playerService.getAllPlayers().subscribe(
      (data) => {
        this.players = data;
      }
    )
  }

  addPlayer(player: any){
    if(this.match.playersPlayed.includes(player)){
      const index = this.match.playersPlayed.indexOf(player);
      this.match.playersPlayed.splice(index,1);
    }
    else{
      this.match.playersPlayed.push(player);
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
      if(window.innerWidth >= 650){
        this.cols = 2;
      }
      if(window.innerWidth < 650){
        this.cols = 1;
      }
  }
}
