import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeaceCertificatePage } from './peace-certificate.page';

const routes: Routes = [
  {
    path: '',
    component: PeaceCertificatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeaceCertificatePageRoutingModule {}
