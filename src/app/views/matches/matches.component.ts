import {Component, OnInit, ViewChild } from '@angular/core';
import { MatchServiceService } from 'src/app/services/match-service.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.less']
})
export class MatchesComponent implements OnInit {

  dataSource: any;
  displayedColumns: string[] = ["dateOfMatch", "playGround" , "totalFees", "carCompensation"];
  
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private matchService: MatchServiceService, private router: Router) {
  }
  
  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  redirect( match : any){
    this.router.navigate(["matchDetails", match.matchId]);
  }
}
