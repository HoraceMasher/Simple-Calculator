import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './constants/environments';

@Injectable({
  providedIn: 'root'
})
export class NssfService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  calculateContributions(grossPay: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/calculator/nssf/contributions?grossPay=${grossPay}`);
  }

  calculateEmployeeGrossPay(nssfContributions: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/calculator/nssf/employee-gross-pay?contributions=${nssfContributions}`);
  }

  calculateEmployeeNetPay(nssfContributions: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/calculator/nssf/employee-net-pay?contributions=${nssfContributions}`);
  }

  getRatesAndInfo(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/calculator/nssf/rates-and-info`);
  }
}
