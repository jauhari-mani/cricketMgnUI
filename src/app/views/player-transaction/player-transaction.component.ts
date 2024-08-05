import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerServiceService } from 'src/app/services/player-service.service';
import { TransactionServiceService } from 'src/app/services/transaction-service.service';

@Component({
  selector: 'app-player-transaction',
  templateUrl: './player-transaction.component.html',
  styleUrls: ['./player-transaction.component.less']
})
export class PlayerTransactionComponent implements OnInit {

  playerId : any;
  playerDetails : any;
  recordFetchedFlag = false;
  public transactionRecord = {
    transactionDate : "",
    message : "",
    amount : "",
    transactionType : "",
    player : ""
  }

  constructor(private activatedRoute : ActivatedRoute, private playerService : PlayerServiceService, private transactionService : TransactionServiceService) { }

  ngOnInit(): void {
    this.getPlayerId();
    this.fetchPlayerRecord();
  }
  
  getPlayerId(){
    this.playerId = this.activatedRoute.snapshot.paramMap.get("code");
  }

  fetchPlayerRecord(){
    this.playerService.getPlayer(this.playerId).subscribe(
      (data) => {
        this.playerDetails = data;
        this.recordFetchedFlag = true;
        this.transactionRecord.player = data;
      }
    )
  }

  postTransaction(){
    this.transactionService.postTransaction(this.transactionRecord).subscribe(
      (data)=>{
        console.warn(data);
      }
    )
  }

}
