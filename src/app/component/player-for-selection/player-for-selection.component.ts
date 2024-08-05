import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-player-for-selection',
  templateUrl: './player-for-selection.component.html',
  styleUrls: ['./player-for-selection.component.less']
})
export class PlayerForSelectionComponent implements OnInit {

  @Input() playerDetails: any;
  wallet: number = 0;
  image: any;
  profilePicture: any;

  constructor(public userService: UserServiceService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(`http://localhost:6060/players/image?id=${this.playerDetails.id}`, { responseType: 'blob' }).subscribe(
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

}
