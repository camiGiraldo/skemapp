import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeaceCertificatePageRoutingModule } from './peace-certificate-routing.module';

import { PeaceCertificatePage } from './peace-certificate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeaceCertificatePageRoutingModule
  ],
  declarations: [PeaceCertificatePage]
})
export class PeaceCertificatePageModule {}
