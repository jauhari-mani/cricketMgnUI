import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/interfaces/match';
import { MatchServiceService } from 'src/app/services/match-service.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.less']
})
export class MatchDetailComponent implements OnInit {

  matchId : any;
  match: Match = new Match();

  constructor(private activatedRoute: ActivatedRoute, private matchService: MatchServiceService) {
    
    this.matchId = this.activatedRoute.snapshot.paramMap.get("code") || "";

    this.matchService.getMatchById(this.matchId).subscribe(
      (data) => {
        this.match = data;
      }
    )
   }

  ngOnInit(): void {
  }

}
