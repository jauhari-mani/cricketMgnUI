import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TreasurerServiceService {

  private BASE_URI = `${baseUrl}/admin`;

  constructor(private httpClient : HttpClient) { }

  uploadImage(imageFile : any){
    return this.httpClient.post<any>(`${this.BASE_URI}/image`, imageFile);
  }

  getImages(){
    return this.httpClient.get<any[]>(`${this.BASE_URI}/images`);
  }
 
  deleteImage(fileName : any){
    return this.httpClient.delete(`${this.BASE_URI}/image/${fileName}`);
  }
}
