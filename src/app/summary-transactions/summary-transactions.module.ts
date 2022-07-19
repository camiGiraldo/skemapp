import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummaryTransactionsPageRoutingModule } from './summary-transactions-routing.module';

import { SummaryTransactionsPage } from './summary-transactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryTransactionsPageRoutingModule
  ],
  declarations: [SummaryTransactionsPage]
})
export class SummaryTransactionsPageModule {}
