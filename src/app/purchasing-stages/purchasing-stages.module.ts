import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PurchasingStagesPageRoutingModule } from './purchasing-stages-routing.module';

import { PurchasingStagesPage } from './purchasing-stages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PurchasingStagesPageRoutingModule
  ],
  declarations: [PurchasingStagesPage]
})
export class PurchasingStagesPageModule {}
