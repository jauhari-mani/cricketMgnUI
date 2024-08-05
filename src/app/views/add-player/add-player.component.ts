import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from 'src/app/services/player-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.less']
})
export class AddPlayerComponent implements OnInit {

  img:any = "https://imgs.search.brave.com/EYz8_6xuOCp1ZAbkDjylDI0G9b87u_BAr5iLzlABNdk/rs:fit:589:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/bWltMmpZek5wU0Nz/bG82MElOb2hRSGFG/OSZwaWQ9QXBp";

  public playerDetails = {
    name: "",
    phnNumber: Number,
    email: "",
    wallet: 0
  }

  public imageFile = null;

  constructor(private playerService : PlayerServiceService) { }

  ngOnInit(): void {
  }

  Register(){
    const formData = new FormData();
    const userData = JSON.stringify(this.playerDetails);
    formData.append("player", userData);
    formData.append("image", this.imageFile || "");
    this.playerService.addPlayer(formData).subscribe(
      (data) => {
        Swal.fire({
          icon: "success",
          title: "Player Added",
          text: data.toString()
        })
      })

  }

  imageAdded(event: any){
    var reader = new FileReader();
    this.imageFile = event.target.files[0];
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.img = reader.result; 
		}
  }

}
