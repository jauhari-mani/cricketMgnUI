import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { PlayerServiceService } from 'src/app/services/player-service.service';
import { TreasurerServiceService } from 'src/app/services/treasurer-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  filesArray!: any[];

  constructor(private treasurerService: TreasurerServiceService) { 
  }
  
  ngOnInit(): void {
    this.getImages();
  }

  getImages(){
    this.treasurerService.getImages().subscribe(
      (data) =>{
        this.filesArray = data;
        console.log("Working : Fetched Files + " + JSON.stringify(this.filesArray));
      }
    )
  }

}
