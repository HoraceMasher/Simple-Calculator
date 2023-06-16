import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../constants/environments';

@Injectable({
  providedIn: 'root'
})
export class NssfService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  calculateNssf(nssfData: any): Observable<any> {
    const url =(`${this.baseUrl}/calculator/nssf/contributions`);
    // const params = new HttpParams ()
    // .set('grossPay', nssfData.grossPay)

    console.log(this.http.post(url, nssfData))
    return this.http.post(url, nssfData)
  }
  }
