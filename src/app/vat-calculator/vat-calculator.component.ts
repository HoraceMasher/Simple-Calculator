import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VatService } from './vat.service';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.css']
})
export class VatCalculatorComponent implements OnInit {
  vatForm: FormGroup;
  taxableAmount: number = 0;
  rate: number = 0;
  vatType: string = 'vatAdded';
  vatAmount: number = 0;
  grossPay: number = 0;
  totalAmount: number = 0;
  showAccordion: boolean = false;
  vatInfo: string = '';

  constructor(private formBuilder: FormBuilder, private vatService: VatService) {
    this.vatForm = this.formBuilder.group({
      taxableAmount: [0, Validators.required],
      rate: [0, Validators.required],
      vatType: ['vatAdded']
    });
  }

  ngOnInit(): void {}

  toggleAccordion(): void {
    this.showAccordion = !this.showAccordion;
  }

  calculateGrossPay(): void {
    if (this.vatForm.valid) {
      this.taxableAmount = this.vatForm.get('taxableAmount')?.value || 0;
      this.rate = this.vatForm.get('rate')?.value || 0;
      this.vatType = this.vatForm.get('vatType')?.value || 'vatAdded';

      this.calculateVATAmount();
      this.calculateTotalAmount();
      this.calculateGrossPayAmount();
    }
  }

  calculateVATAmount(): void {
    this.vatService.calculateVATAmount(this.taxableAmount, this.rate)
      .then((vatAmount: number) => {
        this.vatAmount = vatAmount;
      })
      .catch((error) => {
        console.error('Failed to calculate VAT amount:', error);
      });
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.vatService.calculateTotalAmount(this.taxableAmount, this.vatAmount);
  }

  calculateGrossPayAmount(): void {
    this.grossPay = this.vatService.calculateGrossPayAmount(this.taxableAmount, this.vatAmount);
  }
}
