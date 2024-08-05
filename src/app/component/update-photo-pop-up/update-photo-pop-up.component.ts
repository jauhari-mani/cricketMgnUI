import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerServiceService } from 'src/app/services/player-service.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-photo-pop-up',
  templateUrl: './update-photo-pop-up.component.html',
  styleUrls: ['./update-photo-pop-up.component.less']
})
export class UpdatePhotoPopUpComponent implements OnInit {

  playerId : any;
  image : any;

  constructor(private playerService : PlayerServiceService, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.playerId = data.playerId;
   }

  ngOnInit(): void {
  }

  readImage(event: any){
    this.image = event.target.files[0];
  }
}
