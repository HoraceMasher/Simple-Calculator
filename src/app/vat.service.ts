import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/contants/environments'

@Injectable({
  providedIn: 'root'
})
export class VatService {

  baseUrl:string = enviroment.baseUrl; 
  constructor(private http: HttpClient) {}

  getAmount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/vat/amount`);
  }

  getRate(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/vat/rate`);
  }

  getRatesAndInfo(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/vat/rates-and-info`);
  }

  getTaxableAmount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/vat/taxable-amount`);
  }

  getTotalAmount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/vat/total-amount`);
  }
}
