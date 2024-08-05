import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/interfaces/match';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-select-cars-in-match',
  templateUrl: './select-cars-in-match.component.html',
  styleUrls: ['./select-cars-in-match.component.less']
})
export class SelectCarsInMatchComponent implements OnInit {

  @Input() match: Match = new Match();

  players: any[] = [];


  constructor(private playerService: PlayerServiceService) { }

  ngOnInit(): void {

    this.playerService.getAllPlayers().subscribe(
      (data) => {
        this.players = data;
      }
    )
  }


  addCars(player : any) {
    if(this.match.playersWhoTookTheirCar.includes(player)){
      const index = this.match.playersWhoTookTheirCar.indexOf(player);
      this.match.playersWhoTookTheirCar.splice(index, 1);
    }
    else{
      this.match.playersWhoTookTheirCar.push(player);
    }
  }
}
