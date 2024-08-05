import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.less']
})
export class PlayersComponent implements OnInit {

  listOfPlayers: any[] = [];
  copyOfList: any[] = [];
  cols: any;

  constructor( private playerService: PlayerServiceService) {     
    this.playerService.getAllPlayers().subscribe(data => {
      this.listOfPlayers = data;
      this.copyOfList = data;
    })
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.copyOfList = this.listOfPlayers.filter(player => (player.name.toLowerCase()).includes(filterValue) || player.phnNumber.includes(filterValue))
  }


}
