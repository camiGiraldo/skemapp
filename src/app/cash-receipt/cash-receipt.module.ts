import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashReceiptPageRoutingModule } from './cash-receipt-routing.module';

import { CashReceiptPage } from './cash-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashReceiptPageRoutingModule
  ],
  declarations: [CashReceiptPage]
})
export class CashReceiptPageModule {}
