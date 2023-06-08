import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VatCalculatorComponent } from './vat-calculator/vat-calculator.component';
import { VatService } from './vat-calculator/vat.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NssfCalculatorComponent } from './nssf-calculator/nssf-calculator.component';
import { NssfService } from './nssf-calculator/nssf.service';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    VatCalculatorComponent,
    HomeComponent,
    NssfCalculatorComponent,
    LoanCalculatorComponent
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [NssfService , VatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
