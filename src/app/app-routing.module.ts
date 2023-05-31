import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VatCalculatorComponent } from './vat-calculator/vat-calculator.component';
import { NssfCalculatorComponent } from './nssf-calculator/nssf-calculator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vat-calculator', component: VatCalculatorComponent },
  { path: 'nssf-calculator', component: NssfCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
