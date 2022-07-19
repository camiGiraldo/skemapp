import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPlanPageRoutingModule } from './payment-plan-routing.module';

import { PaymentPlanPage } from './payment-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPlanPageRoutingModule
  ],
  declarations: [PaymentPlanPage]
})
export class PaymentPlanPageModule {}
