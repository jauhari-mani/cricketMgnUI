import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreasurerServiceService } from 'src/app/services/treasurer-service.service';

@Component({
  selector: 'app-treasurer',
  templateUrl: './treasurer.component.html',
  styleUrls: ['./treasurer.component.less']
})
export class TreasurerComponent implements OnInit {

  imageFile : any = undefined;
  filesArray!: any[];

  constructor(private router : Router, private treasurerService : TreasurerServiceService) { }

  ngOnInit(): void {
    this.getImages();
  }

  redirectToTransactionPage(){
    this.router.navigate(["treasurer-transaction"]);
  }

  imageUpload(event : any){
    this.imageFile = event.target.files[0];
  }

  formSubmit(){
    if(this.imageFile != undefined){
      var formData = new FormData();
      formData.append("image", this.imageFile);
      this.treasurerService.uploadImage(formData).subscribe(
        (data) => {
        }
      )
    }
  }

  getImages(){
    this.treasurerService.getImages().subscribe(
      (data) =>{
        this.filesArray = data;
      }
    )
  }

  deleteImage(Imagename : any){
    this.treasurerService.deleteImage(Imagename).subscribe(
      (data) => {
        console.log("Console log return on delete api call : " + data);
      }
    )
  }

}
