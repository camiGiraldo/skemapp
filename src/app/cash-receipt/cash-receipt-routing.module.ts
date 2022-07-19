import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashReceiptPage } from './cash-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: CashReceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashReceiptPageRoutingModule {}
