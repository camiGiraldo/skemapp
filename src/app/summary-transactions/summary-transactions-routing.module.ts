import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummaryTransactionsPage } from './summary-transactions.page';

const routes: Routes = [
  {
    path: '',
    component: SummaryTransactionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummaryTransactionsPageRoutingModule {}
