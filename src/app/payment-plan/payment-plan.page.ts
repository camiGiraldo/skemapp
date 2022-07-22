import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { PaymentItemModel, ProjectModel } from '../model/index.model';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.page.html',
  styleUrls: ['./payment-plan.page.scss'],
})
export class PaymentPlanPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  listPaymentItem: PaymentItemModel[];
  project: ProjectModel;

  constructor() { }

  ngOnInit() {
    this.getPaymentItems();
    this.getProject();
  }

  getProject() {
    const data: ProjectModel = {
      id: 1,
      inmueble: 'T-G-APT-101',
      nombre: 'Tribeca',
      tipoVenta: 'CREDITO TERCEROS',
      vendedor: 'Julian Gomez Hernandez',
      cuotaInicial: 2000000,
      valorNeto: 1333000000
    };

    this.project = data;
  }

  getPaymentItems() {

    const data: PaymentItemModel[] = [
      {
        id: 1,
        concepto: 'SEPARACION',
        fechaProgramada: new Date(),
        valorPagado: 2000000,
        saldo: 0,
        diasVencimiento: 0,
        valorProgramado: 2000000,
        fechaPago: new Date(),
        divisa: 'PESO'
      },
      {
        id: 1,
        concepto: 'CUOTA',
        fechaProgramada: new Date(),
        valorPagado: 2000000,
        saldo: 0,
        diasVencimiento: 0,
        valorProgramado: 2000000,
        fechaPago: new Date(),
        divisa: 'PESO'
      },
      {
        id: 1,
        concepto: 'CUOTA',
        fechaProgramada: new Date(),
        valorPagado: 2000000,
        saldo: 0,
        diasVencimiento: 0,
        valorProgramado: 2000000,
        fechaPago: new Date(),
        divisa: 'PESO'
      },
      {
        id: 1,
        concepto: 'CUOTA',
        fechaProgramada: new Date(),
        valorPagado: 2000000,
        saldo: 0,
        diasVencimiento: 0,
        valorProgramado: 2000000,
        fechaPago: new Date(),
        divisa: 'PESO'
      },
      {
        id: 1,
        concepto: 'CUOTA',
        fechaProgramada: new Date(),
        valorPagado: 2000000,
        saldo: 0,
        diasVencimiento: 0,
        valorProgramado: 2000000,
        fechaPago: new Date(),
        divisa: 'PESO'
      },
      {
        id: 1,
        concepto: 'CUOTA',
        fechaProgramada: new Date(),
        valorPagado: 2000000,
        saldo: 0,
        diasVencimiento: 0,
        valorProgramado: 2000000,
        fechaPago: new Date(),
        divisa: 'PESO'
      },
      {
        id: 1,
        concepto: 'CESANTIAS',
        fechaProgramada: new Date(),
        valorPagado: 2000000,
        saldo: 3000000,
        diasVencimiento: 0,
        valorProgramado: 5000000,
        fechaPago: new Date(),
        divisa: 'PESO'
      },
      {
        id: 1,
        concepto: 'CUOTA',
        fechaProgramada: new Date(),
        valorPagado: 2000000,
        saldo: 0,
        diasVencimiento: 0,
        valorProgramado: 2000000,
        fechaPago: new Date(),
        divisa: 'PESO'
      },
      {
        id: 1,
        concepto: 'CUOTA',
        fechaProgramada: new Date(),
        valorPagado: 2000000,
        saldo: 0,
        diasVencimiento: 0,
        valorProgramado: 2000000,
        fechaPago: new Date(),
        divisa: 'PESO'
      },
      {
        id: 1,
        concepto: 'CUOTA',
        fechaProgramada: new Date(),
        valorPagado: 2000000,
        saldo: 0,
        diasVencimiento: 0,
        valorProgramado: 2000000,
        fechaPago: new Date(),
        divisa: 'PESO'
      },
    ];

    this.listPaymentItem = data;

  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();



      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.listPaymentItem.length === 5) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
