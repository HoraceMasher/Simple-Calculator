import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NssfService } from './nssf.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nssf-calculator',
  templateUrl: './nssf-calculator.component.html',
  styleUrls: ['./nssf-calculator.component.css']
})
export class NssfCalculatorComponent implements OnInit {
  nssfForm: FormGroup;
  grossPay: number = 0;
  employerNssfContribution: number = 0;
  employeeNssfContribution: number = 0;
  nssfTotalContribution: number = 0;
  netPay: number = 0;
  totalAmount: number = 0;
  showAccordion: boolean = false;
  nssInfo: string ="";
  response: any;

  constructor(private nssfService: NssfService) {
    this.nssfForm = new FormGroup({
      grossPay : new FormControl (null, Validators.required)
    });
  }

  ngOnInit() {
    this.nssfForm.valueChanges.subscribe((val:any)=>{
      if (val){
        console.log(val)
      }
    })
  }
 
  toggleAccordion(): void {
    this.showAccordion = !this.showAccordion;
  }
  calculateNssf() {
    if (this.nssfForm.valid) {
      this.nssfService.calculateNssf(this.nssfForm.value).subscribe(
        result => {
          this.employeeNssfContribution =result.employeeContribution;
          this.employerNssfContribution =result.employerContribution;
          this.netPay = result.employeeNetPay;

          console.log(result);
          this.response =result;
        },

        error => {
          console.log ('Error calculating Loan:', error);
        }
      );
    }
  }
}