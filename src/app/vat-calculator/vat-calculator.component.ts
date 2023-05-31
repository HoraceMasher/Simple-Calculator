import { Component, OnInit } from '@angular/core';
import { VatService } from '../vat.service';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.css']
})
export class VatCalculatorComponent implements OnInit {
  amount: number = 0;
  rate: number = 0;
  vatType: string = 'vatAdded';
  vatAmount: number = 0;
  taxableAmount: number = 0;
  totalAmount: number = 0;
  grossPay: number = 0;

  constructor(private vatService: VatService) {}

  ngOnInit(): void {
    this.getAmount();
    this.getRate();
  }

  getAmount(): void {
    this.vatService.getAmount().subscribe(amount => {
      this.amount = amount;
    });
  }

  getRate(): void {
    this.vatService.getRate().subscribe(rate => {
      this.rate = rate;
    });
  }

  calculateGrossPay(): void {
    this.vatAmount = this.amount * (this.rate / 100);
    this.taxableAmount = this.amount;
    this.totalAmount = this.amount + this.vatAmount;
    
    if (this.vatType === 'vatAdded') {
      this.grossPay = this.totalAmount;
    } else if (this.vatType === 'vatDeducted') {
      this.grossPay = this.amount;
    }
  }
}
