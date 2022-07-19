import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentPlanPage } from './payment-plan.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPlanPageRoutingModule {}
