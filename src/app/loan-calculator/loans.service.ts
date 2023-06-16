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
    console.log(this.http.post(url, loanData));
    return this.http.post(url, loanData);
  }
}
