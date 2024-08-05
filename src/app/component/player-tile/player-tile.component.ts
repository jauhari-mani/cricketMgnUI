import { HttpClient} from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerServiceService } from 'src/app/services/player-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { LoginComponent } from 'src/app/views/login/login.component';

@Component({
  selector: 'app-player-tile',
  templateUrl: './player-tile.component.html',
  styleUrls: ['./player-tile.component.less']
})
export class PlayerTileComponent implements OnInit {

  @Input() playerDetails: any;
  productsPrice: number = 0;
  wallet: number = 0;
  image : any = undefined;
  profilePicture: any;

  constructor(private router: Router, private playerService: PlayerServiceService, private httpClient : HttpClient) { 
  }
  
  async ngOnInit() {
    this.playerService.getPlayerPhoto(this.playerDetails.id).subscribe(
      data => {
        this.image =  data;
        var reader = new FileReader();
        reader.readAsDataURL(data);
        
        reader.onload = (_event) => {
          this.profilePicture = reader.result; 
        }
      }
    )

    this.wallet = Math.floor(this.playerDetails.wallet); 
  }

  redirect(){
    this.router.navigate(["playerDetail", this.playerDetails.id]);
  }

}
