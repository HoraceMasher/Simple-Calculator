import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../constants/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  calculateLoan(loanData: any): Observable<any> {
    const url = `${this.baseUrl}/calculator/loan/monthly-payments`;
    const params = new HttpParams()
      .set('intervalOption', loanData.intervalOption)
      .set('time', loanData.time)
      .set('ratePerMonth', loanData.ratePerMonth)
      .set('principal', loanData.principal);
    console.log(this.http.get(url, { params }))
    return this.http.get(url, { params });
  }
}
