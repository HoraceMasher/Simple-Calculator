import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VatService } from './vat.service';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.css']
})
export class VatCalculatorComponent implements OnInit {
  vatForm: FormGroup; // Form group to hold the form controls
  netAmount: number = 0; // The net amount entered by the user
  vatRate: number = 0; // The VAT rate
  vatAmount: number = 0; // The calculated VAT amount
  totalAmount: number = 0; // The total amount including VAT
  showAccordion: boolean = false; // Controls the visibility of the accordion
  vatInfo: string = ''; // Holds the VAT information
  response: any; // Stores the response from the VAT service

  constructor(private vatService: VatService, private formBuilder: FormBuilder) {
    this.vatForm = this.formBuilder.group({
      taxableAmount: [null, Validators.required] // Creating the form control for net amount with required validation
    });
  }

  ngOnInit() {
    this.vatForm.valueChanges.subscribe((val: any) => {
      if (val) {
        console.log(val); // Logging the form value changes for debugging
      }
    });
  }

  toggleAccordion(): void {
    this.showAccordion = !this.showAccordion; // Toggling the accordion visibility
  }

  calculateVat() {
    if (this.vatForm.valid) {
      this.vatService.calculateVat(this.vatForm?.value).subscribe(
        result => {
          this.totalAmount =result.totalAmount;
          this.vatAmount=result.vatAmount;
          this.vatRate = result.vatRate;
          console.log(result); // Logging the result from the VAT service
          this.response = result; // Storing the response in the component
        },
        error => {
          console.error('Error Calculating VAT:', error); // Handling any errors that occur during VAT calculation
        }
      );
    }
  }
}
