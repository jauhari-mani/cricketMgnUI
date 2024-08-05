import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public userDetails = {
    userName: "",
    emailId: "",
 	  mobileNumber: "",
	  firstName: "",
	  lastName: "",
	  password: ""
  }

  public loginDTO = {
    userName: "",
    password: ""
  }

  tokenStorage: any;

  constructor(private userService: UserServiceService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  login(items: any){
    if(items.valid){
      this.userService.login(this.loginDTO).subscribe(
        (data)=>{
          this.tokenStorage = data;
          this.userService.setToken(this.tokenStorage.token);
          this.router.navigate([""]);
        },
        (error) =>{
          Swal.fire({
            icon: 'error',
            title: 'Opos..',
            text: "Invalid User Credentials"
          })
        }
      )
    }
  }

  Register(form: any){
    if(form.valid){
      console.warn(this.userDetails);
      this.userService.addUser(this.userDetails).subscribe(
        (data) => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User Added Successfully!!'
          })
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        }
      )
    }
  }

  onTabSwitch(loginForm: any, signUpForm: any){
    loginForm.resetForm();
    signUpForm.resetForm();
  }

}
