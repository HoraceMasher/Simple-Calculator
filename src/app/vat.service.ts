import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './constants/environments';

@Injectable({
  providedIn: 'root'
})
export class VatService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getVatInfo(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/calculator/vat/rates-and-info`);
  }

  getTaxableAmount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/calculator/vat/taxable-amount`);
  }
  getRate(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/calculator/vat/rate`);
  }
}
