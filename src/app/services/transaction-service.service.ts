import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  private GET_PLAYERS_TRANSACTION = "http://localhost:6060/transactions";

  constructor(private httpClient: HttpClient) { }

  findPlayerTransactions(id: any): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.GET_PLAYERS_TRANSACTION}/${id}`);
  }

  postTransaction(transactionObj : any){
    return this.httpClient.post(`${this.GET_PLAYERS_TRANSACTION}`, transactionObj);
  }
}
