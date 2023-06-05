import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../constants/environments';

@Injectable({
  providedIn: 'root'
})
export class NssfService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getNssfInfo(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/calculator/nssf/employee-net-pay`);
  }

  calculateContributions(grossPay: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/calculator/nssf/contributions`, { params: { grossPay: grossPay.toString() } });
  }

  calculateEmployeeNetPay(nssfTotalContribution: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/calculator/nssf/employee-net-pay`, { params: { nssfTotalContribution: nssfTotalContribution.toString() } });
  }
}
