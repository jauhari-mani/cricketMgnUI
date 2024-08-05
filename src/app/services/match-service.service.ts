import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchServiceService {

  private ADD_MATCH_URI = `http://localhost:6060/match`;
  private GET_MATCH_URI = `http://localhost:6060/match`;

  constructor(private httpClient: HttpClient) { }


  addMatch(match: any){
    return this.httpClient.post(`${this.ADD_MATCH_URI}`, match);
  }

  getAllMatches(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.GET_MATCH_URI}`);
  }

  getMatchById(id : any): Observable<any>{
    return this.httpClient.get<any>(`${this.ADD_MATCH_URI}/${id}`);
  }

}
