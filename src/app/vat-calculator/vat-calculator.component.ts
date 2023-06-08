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
  netAmount: number = 0;
  vatRate: number = 0;
  vatAmount: number = 0;
  totalAmount: number = 0;
  showAccordion: boolean = false;
  vatInfo: string = '';
  response: any;
  imagePath = 'assets/VAT(1).png';

  constructor(private vatService: VatService, private formBuilder: FormBuilder) {
    this.vatForm = this.formBuilder.group({
      netAmount: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.vatForm.valueChanges.subscribe((val: any) => {
      if (val) {
        console.log(val);
      }
    });
  }

  toggleAccordion(): void {
    this.showAccordion = !this.showAccordion;
  }

  calculateVat() {
    if (this.vatForm.valid) {
      this.vatService.calculateVat(this.vatForm.value).subscribe(
        result => {
          this.netAmount = result.netAmount;
          this.totalAmount = result.totalAmount;
          this.vatAmount = result.vatAmount;
          console.log(result);
          this.response = result;
        },
        error => {
          console.error('Error Calculating VAT:', error);
        }
      );
    }
  }
}
