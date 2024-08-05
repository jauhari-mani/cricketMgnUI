import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private ADD_USER = `${baseUrl}/user`;
  private LOGIN_USER_GENERATE_TOKEN = `${baseUrl}/generate-token`;

  constructor(private httpClient: HttpClient) { }

  //Adding new user into database.
  addUser(userDetails: any){
    return this.httpClient.post(`${this.ADD_USER}`,userDetails);
  }

  //Generating user token which validates user's identity and also provides access to atunticated API's.
  login(loginDTO: any){
    return this.httpClient.post(`${this.LOGIN_USER_GENERATE_TOKEN}`,loginDTO);
  }

  //To delete user token from local storage.
  logout(){
    localStorage.removeItem("token");
    return true;
  }

  //to set token in localStorage so that we can successfully access authenticated API.
  setToken(token: any){
    localStorage.setItem("token", token);
    return true;
  }

  //To check user is logged in. That is we have a valid user authenticated token in our storage.
  isLoggedIn(){
    let tokenStr = localStorage.getItem("token");
    if(tokenStr == undefined || tokenStr == "" || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  //method to fetch token from local storage.
  getToken(){
    return localStorage.getItem("token");
  }

}
