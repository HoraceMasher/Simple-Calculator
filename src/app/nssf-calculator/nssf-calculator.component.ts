import { Component } from '@angular/core';
import { NssfService } from 'src/app/nssf.service';

@Component({
  selector: 'app-nssf-calculator',
  templateUrl: './nssf-calculator.component.html',
  styleUrls: ['./nssf-calculator.component.css']
})
export class NssfCalculatorComponent {
  grossPay: number = 10000;
  netPay: number = 0;
  employeeNssfContribution: number = 0;
  employerNssfContribution: number = 0;
  nssfTotalContribution: number = 0;
  nssInfo: string = "";

  constructor(private nssfService: NssfService) {
    this.getRatesAndInfo();
  }

  calculateContributions(): void {
    this.nssfService.calculateContributions(this.grossPay).subscribe(response => {
      this.employeeNssfContribution = response.employeeContribution;
      this.employerNssfContribution = response.employerContribution;
      this.nssfTotalContribution = response.totalContribution;

      this.calculateEmployeeNetPay();
    });
  }

  calculateEmployeeNetPay(): void {
    this.nssfService.calculateEmployeeNetPay(this.nssfTotalContribution).subscribe(response => {
      this.netPay = response.netPay;
    });
  }

  getRatesAndInfo(): void {
    this.nssfService.getRatesAndInfo().subscribe(response => {
      this.nssInfo = response.nssInfo;
    });
  }
}
