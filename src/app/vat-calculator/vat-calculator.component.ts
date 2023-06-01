import { Component } from '@angular/core';
import { VatService } from 'src/app/vat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.css']
})
export class VatCalculatorComponent {
  amount: number = 0;
  rate: number = 0;
  vatType: string = 'vatAdded';
  vatAmount: number = 0;
  vatAmountExcluded: number = 0;
  taxableAmount: number = 0;
  totalAmount: number = 0;
  grossPay: number = 0;
  showAccordion: boolean = false;
  vatInfo: string = '';
  

  constructor(private vatService: VatService) {
    this.getVatRatesAndInfo();
    
  }

  getVatRatesAndInfo(): void {
    this.vatService.getVatInfo()
    .subscribe(
      (response: any) => {
        console.log('API response:', response);
        this.vatInfo = response.vatInfo;
      },
      (error: any) => {
        console.error('Error occurred while fetching VAT rates and info:', error);
      }
    );
  }

  calculateGrossPay(): void {
    this.calculate();
  }

  calculate(): void {
    const ratePercentage = this.rate / 100; 
    this.vatAmount = this.taxableAmount * ratePercentage;
    this.vatAmountExcluded = this.taxableAmount / (1 + ratePercentage) * ratePercentage;
    this.totalAmount = this.taxableAmount + this.vatAmount;
  
    if (this.vatType === 'vatAdded') {
      this.grossPay = this.totalAmount;
    } else if (this.vatType === 'excludeVAT') {
      this.grossPay = this.taxableAmount - this.vatAmountExcluded;
    }
  }
  toggleAccordion(): void {
    this.showAccordion = !this.showAccordion;
}
}