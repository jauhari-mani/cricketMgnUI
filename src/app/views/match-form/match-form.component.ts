import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from 'src/app/interfaces/match';
import { MatchServiceService } from 'src/app/services/match-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.less']
})
export class MatchFormComponent implements OnInit {


  match: Match = new Match();
  playersSelected = false;

  constructor(private router: Router, private matchService: MatchServiceService) { 
  }

  ngOnInit(): void {
  }

  matchDetailsForm(data: any){
    this.match.dateOfMatch = data.dateOfMatch;
    this.match.totalFees = data.totalMatchFees;
    this.match.carCompensation = data.carCompensation;
    this.match.playGround = data.playGround;
    return true;
  }

 playerCount(){
  if(this.match.playersPlayed.length < 2){
    Swal.fire({
       icon: 'error',
       title: "Error",
       text: "Select Atleast 12 players"
     })
  }
  return true;
 }

 calculate(){
  this.match.perPersonContribution = Math.floor(this.match.totalFees / this.match.playersPlayed.length);
  return true;
 }

 addMatch(){
  this.matchService.addMatch(this.match).subscribe(
    (success) => {
      Swal.fire({
        icon: 'success',
        title: 'Match Created'
      })
    },

    (error) => {
      Swal.fire({
        icon: 'error',
        title: error
      })
    }

  )
 }

}
