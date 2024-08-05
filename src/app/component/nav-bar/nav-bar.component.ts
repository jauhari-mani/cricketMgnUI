import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, public userService: UserServiceService) { }

  ngOnInit(): void {
  }

  redirectToHomePage(){
    this.router.navigate([""]);
  }

  redirectToLoginPage(){
    this.router.navigate(["login"]);
  }

  logout(){
    this.userService.logout();
    this.router.navigate([""]);
  }
}
