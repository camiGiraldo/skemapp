import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasingStagesPage } from './purchasing-stages.page';

const routes: Routes = [
  {
    path: '',
    component: PurchasingStagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasingStagesPageRoutingModule {}
