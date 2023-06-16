import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../constants/environments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VatService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

   calculateVat (vatData : any): Observable <any> {
    const url = (`${this.baseUrl}/calculator/vat/amount`);
    //  const params = new HttpParams ()
    // .set ('netAmount', vatData.netAmount)
    console.error(this.http.post(url,vatData));
    return this.http.post(url, vatData)

  }
  }
   
