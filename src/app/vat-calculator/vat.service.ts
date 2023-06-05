import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../constants/environments';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VatService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  calculateVATAmount(taxableAmount: number, rate: number): Promise<number> {
    const url = `${this.baseUrl}/calculator/vat/rate`;
    const payload = {
      taxableAmount: taxableAmount,
      rate: rate
    };

    return firstValueFrom(this.http.post<number>(url, payload));
  }

  calculateTotalAmount(taxableAmount: number, vatAmount: number): number {
    return taxableAmount + vatAmount;
  }

  calculateGrossPayAmount(taxableAmount: number, vatAmount: number): number {
    return taxableAmount + vatAmount;
  }
}
