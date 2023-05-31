import { Component } from '@angular/core';
import { NssfService } from 'src/app/nssf.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nssf-calculator',
  templateUrl: './nssf-calculator.component.html',
  styleUrls: ['./nssf-calculator.component.css']
})
export class NssfCalculatorComponent {
  grossPay: number = 0;
  nssfContributions: number | null = null;
  employeeGrossPay: number | null = null;
  employeeNetPay: number | null = null;

  constructor(private nssfService: NssfService) {}

  calculateContributions(): void {
    this.nssfService.calculateContributions(this.grossPay).subscribe(result => {
      this.nssfContributions = result.contributions;
      this.employeeGrossPay = result.employeeGrossPay;
      this.employeeNetPay = result.employeeNetPay;
    });
  }
}
