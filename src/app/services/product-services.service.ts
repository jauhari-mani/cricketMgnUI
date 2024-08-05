import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  baseUrl  from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  private BASE_URI = `${baseUrl}/products`;

  // private GET_ALL_PRODUCTS_API = "http://localhost:7070/products/all";
  // private GET_PRODUCT_DETAILS_BY_ID = "http://localhost:7070/products/details";
  // private FETCH_PRODUCT_BASED_ON_PATTERN = "http://localhost:7070/products";
  // private FETCH_PRODUCTS_PRICE_BY_ID = "http://localhost:7070/products/price";

  constructor(private httpClient: HttpClient) { }

  findAllProducts(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.BASE_URI}/all`);
  }

  findDetailsById(productCode: String): Observable<any>{
    return this.httpClient.get(`${this.BASE_URI}/details/${productCode}`);
  }

  fetchProductOnSearch(pattern: String):Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.BASE_URI}/${pattern}`);
  }

  fetchProductsPrice(code: String):Observable<any>{
    return this.httpClient.get(`${this.BASE_URI}/price/${code}`);
  }

}
