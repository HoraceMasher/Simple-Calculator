import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoanService } from './loans.service';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent implements OnInit {
  loanForm: FormGroup ;
  monthlyPayment: number = 0;
  totalPayment: number = 0;
  response:any;

  constructor(private loanService: LoanService) {    
    this.loanForm =new FormGroup({
      intervalOption: new FormControl(null, Validators.required),
      principal: new FormControl(null, Validators.required),
      rate: new FormControl(null, Validators.required),
      time: new FormControl(null)
    });
   }

  ngOnInit() {
    this.loanForm.valueChanges.subscribe((val:any)=>{
      if(val){
        console.log(val)
      }
    })
  }

  calculateLoan() {
    if (this.loanForm.valid) {
      this.loanService.calculateLoan(this.loanForm.value).subscribe(
        result => {
          console.log(result);
          this.response = result;
        },
        error => {
          console.log('Error calculating loan:', error);
        }
      );
    }
  }
}
