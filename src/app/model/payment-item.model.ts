export interface PaymentItemModel {
  id: number;
  concepto: string;
  fechaProgramada: Date;
  valorProgramado: number;
  saldo: number;
  diasVencimiento: number;
  valorPagado: number;
  fechaPago: Date;
  divisa: string;
}
