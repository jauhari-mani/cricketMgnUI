import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  baseUrl  from './helper';


@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {


  private base_URI = `${baseUrl}/players`;
  private GET_ALL_TRANSACTIONS = `${baseUrl}/transactions`;

  constructor(public httpClient: HttpClient) { }

  addPlayer(playerData: any){
    return this.httpClient.post(`http://localhost:6060/players`, playerData);
  }

  updatePlayer(playerData: any){
    return this.httpClient.put(this.base_URI, playerData);
  }

  getAllPlayers(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.base_URI);
  }

  getPlayer( id : any): Observable<any>{
    return this.httpClient.get<any>(`${this.base_URI}/${id}`);
  }

  getPlayerMatches( id : any): Observable<any>{
    return this.httpClient.get<any[]>(`${this.base_URI}/matches/${id}`);
  }

  getPlayerCarInMatch(id : any) : Observable<any>{
    return this.httpClient.get<any[]>(`${this.base_URI}/car/${id}`);
  }

  getPlayerTransactions(id : any): Observable<any>{
    return this.httpClient.get<any[]>(`${this.GET_ALL_TRANSACTIONS}/${id}`);
  }

  getPlayerPhoto(playerId : any){
    return this.httpClient.get(`http://localhost:6060/players/image?id=${playerId}`, { responseType: 'blob' });
  }
}
