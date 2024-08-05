import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.less']
})
export class PlayerDetailsComponent implements OnInit {

  matches: any[] = [];
  cars: any[] = [];
  transactions: any[] = [];
  playerId: String = "";
  playerDetails: any;
  image: any;
  playerPhoto: any;
  playerRecordFetched = false;
 
  constructor(private playerService: PlayerServiceService, private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {

    this.playerId = this.activatedRoute.snapshot.paramMap.get("code") || "";

    this.playerService.getPlayer(this.playerId).subscribe(
      (data) =>{
        this.playerDetails = data;
        this.playerRecordFetched = true;
      }
    )
  
    this.playerService.getPlayerMatches(this.playerId).subscribe(
      (data) => {
        this.matches = data;
      }
    );

    this.playerService.getPlayerCarInMatch(this.playerId).subscribe(
      (data) => {
        this.cars = data;
      }
    );

    this.playerService.getPlayerTransactions(this.playerId).subscribe(
      (data) => {
        this.transactions = data;
      }
    )
        
    this.playerService.getPlayerPhoto(this.playerId).subscribe(
      data => {
        this.image =  data;
        var reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onload = (_event) => {
          this.playerPhoto = reader.result; 
        }
      }
    )
    
  }

  redirectToEditPage(){
    this.router.navigate(["edit-player", this.playerId]);
  }

  redirectToTransactionPage(){
    this.router.navigate(["player-transaction", this.playerId]);
  }

}
