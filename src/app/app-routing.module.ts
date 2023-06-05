import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VatCalculatorComponent } from './vat-calculator/vat-calculator.component';
import { NssfCalculatorComponent } from './nssf-calculator/nssf-calculator.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vat-calculator', component: VatCalculatorComponent },
  { path: 'nssf-calculator', component: NssfCalculatorComponent },
  {path: 'loan-calculator', component: LoanCalculatorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),  
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]

})
export class AppRoutingModule {}
