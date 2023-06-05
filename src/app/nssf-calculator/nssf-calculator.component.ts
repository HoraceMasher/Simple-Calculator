import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NssfService } from './nssf.service';

@Component({
  selector: 'app-nssf-calculator',
  templateUrl: './nssf-calculator.component.html',
  styleUrls: ['./nssf-calculator.component.css']
})
export class NssfCalculatorComponent implements OnInit {
  nssfForm: FormGroup;
  grossPay: number = 0;
  employerRate: number = 0;
  employeeRate: number = 0;
  employerContribution: number = 0;
  employeeContribution: number = 0;
  nssfTotalContribution: number = 0;
  employeeNetPay: number = 0;

  constructor(private formBuilder: FormBuilder, private nssfService: NssfService) {
    this.nssfForm = this.formBuilder.group({
      grossPay: [0, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getNssfInfo();
  }

  getNssfInfo(): void {
    this.nssfService.getNssfInfo().subscribe(
      (nssfInfo: any) => {
        if (nssfInfo) {
          this.employerRate = nssfInfo.employerRate || 0;
          this.employeeRate = nssfInfo.employeeRate || 0;
        }
      },
      (error: any) => {
        console.error('Failed to fetch NSSF info:', error);
      }
    );
  }

  calculateNssfContributions(): void {
    if (this.nssfForm.valid) {
      this.grossPay = this.nssfForm.get('grossPay')?.value ?? 0;
  
      this.nssfService.calculateContributions(this.grossPay).subscribe({
        next: (result: any) => {
          this.employerContribution = result.employercontribution;
          this.employeeContribution = result.employeecontribution;
          this.nssfTotalContribution = result.nssfTotalContribution;
        },
        error: (error: any) => {
          console.error('Failed to calculate NSSF contributions:', error);
        }
      });
      
  
      this.calculateEmployeeNetPay();
    }
  }
  

  calculateEmployeeNetPay(): void {
    this.nssfService.calculateEmployeeNetPay(this.nssfTotalContribution).subscribe(
      (result: any) => {
        if (result) {
          this.employeeNetPay = result.employeeNetPay || 0;
        }
      },
      (error: any) => {
        console.error('Failed to calculate employee net pay:', error);
      }
    );
  }
}
