import { Component } from '@angular/core';

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

  calculateGrossPay(): void {
    this.vatAmount = this.amount * (this.rate / 100);
    this.vatAmountExcluded = this.amount / (1 + this.rate / 100) * (this.rate / 100);
    this.taxableAmount = this.amount;
    this.totalAmount = this.amount + this.vatAmount;

    if (this.vatType === 'vatAdded') {
      this.grossPay = this.totalAmount;
    } else if (this.vatType === 'excludeVAT') {
      this.grossPay = this.amount - this.vatAmountExcluded;
    }

    this.roundDecimals();
  }

  roundDecimals(): void {
    this.vatAmount = Number(this.vatAmount.toFixed(2));
    this.vatAmountExcluded = Number(this.vatAmountExcluded.toFixed(2));
    this.taxableAmount = Number(this.taxableAmount.toFixed(2));
    this.totalAmount = Number(this.totalAmount.toFixed(2));
    this.grossPay = Number(this.grossPay.toFixed(2));
  }
}
