import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VatService {
  private baseUrl = 'http://192.168.100.9:8085/calculator/vat';

  constructor(private http: HttpClient) {}

  getAmount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/amount`);
  }

  getRate(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/rate`);
  }

  getRatesAndInfo(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/rates-and-info`);
  }

  getTaxableAmount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/taxable-amount`);
  }

  getTotalAmount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total-amount`);
  }
}
