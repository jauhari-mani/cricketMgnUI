import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ServiceabilityService {

  private BASE_URI = `${baseUrl}/delivery`;
  // private GET_DELIVERY_AVALIABILITY = "http://localhost:7070/delivery";

  constructor(private httpClient: HttpClient) { }

  checkDelivery(pinCode: number): Observable<any>{
    return this.httpClient.get(`${this.BASE_URI}/${pinCode}`);
  }

}
