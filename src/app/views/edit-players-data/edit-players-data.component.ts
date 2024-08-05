import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatePhotoPopUpComponent } from 'src/app/component/update-photo-pop-up/update-photo-pop-up.component';
import { PlayerServiceService } from 'src/app/services/player-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-players-data',
  templateUrl: './edit-players-data.component.html',
  styleUrls: ['./edit-players-data.component.less']
})
export class EditPlayersDataComponent implements OnInit {

  img:any = "https://imgs.search.brave.com/EYz8_6xuOCp1ZAbkDjylDI0G9b87u_BAr5iLzlABNdk/rs:fit:589:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/bWltMmpZek5wU0Nz/bG82MElOb2hRSGFG/OSZwaWQ9QXBp";
  playerId : any;
  image: any;
  playerPhoto: any = undefined;

  public playerDetails = {
    id: 0,
    name: "",
    phnNumber: Number,
    email: "",
    wallet: 0
  }

  public imageFile = null;

  constructor(private playerService : PlayerServiceService, private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getPlayerIdfromRouterURL();
    this.fetchPlayerDetails();
    this.fetchImage();
  }
  
  getPlayerIdfromRouterURL(){
    this.playerId =  this.activatedRoute.snapshot.paramMap.get('code');
  }

  fetchPlayerDetails(){
    this.playerService.getPlayer(this.playerId).subscribe(
      (data) =>{
        this.playerDetails = data;
      },
      (err)=>{
        this.router.navigate(["players"]);
      }
    )
  }
  
  fetchImage(){
    this.httpClient.get(`http://localhost:6060/players/image?id=${this.playerId}`, { responseType: 'blob' }).subscribe(
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

  Register(){
    const formData = new FormData();
    const userData = JSON.stringify(this.playerDetails);
    formData.append("player", userData);
    formData.append("image", this.imageFile || "");
    this.playerService.updatePlayer(formData).subscribe(
      (data) => {
        Swal.fire({
          icon: "success",
          title: "Player Added"
        })
      })

  }

  imageAdded(photoFile: any){
    var reader = new FileReader();
    this.imageFile = photoFile;
		reader.readAsDataURL(photoFile);
		
		reader.onload = (_event) => {
			this.img = reader.result;
      this.playerPhoto = reader.result; 
		}
  }

  OpenDialog(enterAnimation : string, exitAnimation : string){
    const dialogRef = this.dialog.open(UpdatePhotoPopUpComponent, {
      enterAnimationDuration : enterAnimation,
      exitAnimationDuration: exitAnimation,
      width: "60%",
      data : {playerId : this.playerId}
    })

    dialogRef.afterClosed().subscribe( result => {
      this.imageAdded(result);
      console.log("dailog is closed  : "  + result);
    })
  }
}
