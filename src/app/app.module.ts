import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VatCalculatorComponent } from './vat-calculator/vat-calculator.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NssfCalculatorComponent } from './nssf-calculator/nssf-calculator.component';
@NgModule({
  declarations: [
    AppComponent,
    VatCalculatorComponent,
    HomeComponent,
    NssfCalculatorComponent,
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
