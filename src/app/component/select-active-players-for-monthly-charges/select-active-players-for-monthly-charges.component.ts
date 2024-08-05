import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MonthlyChargers } from 'src/app/interfaces/monthly-chargers';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-select-active-players-for-monthly-charges',
  templateUrl: './select-active-players-for-monthly-charges.component.html',
  styleUrls: ['./select-active-players-for-monthly-charges.component.less']
})
export class SelectActivePlayersForMonthlyChargesComponent implements OnInit {

  @Input() monthlyCharges : MonthlyChargers = new MonthlyChargers();

  players: any[] = [];
  cols: any;

  constructor(private playerService : PlayerServiceService) { }

  ngOnInit(): void {

    this.playerService.getAllPlayers().subscribe(
      (data) => {
        this.players = data;
      }
    )
  }

  addPlayer(player: any){
    if(this.monthlyCharges.activePlayers.includes(player)){
      const index = this.monthlyCharges.activePlayers.indexOf(player);
      this.monthlyCharges.activePlayers.splice(index,1);
    }
    else{
      this.monthlyCharges.activePlayers.push(player);
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
