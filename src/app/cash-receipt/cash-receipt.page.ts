import { Component, OnInit } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';

@Component({
  selector: 'app-cash-receipt',
  templateUrl: './cash-receipt.page.html',
  styleUrls: ['./cash-receipt.page.scss'],
})
export class CashReceiptPage implements OnInit {

  content: string;

  constructor(private pdfGenerator: PDFGenerator) { }

  
  ngOnInit() {
  }

  downloadInvoice() {
    this.content = document.getElementById('PrintInvoice').innerHTML;
    let options = {
      documentSize: 'A4',
      type: 'share',
      // landscape: 'portrait',
      fileName: 'Recibo-de-Caja.pdf'
    };
    
    this.pdfGenerator.fromData(this.content, options)
      .then((base64) => {
        console.log('OK', base64);
      }).catch((error) => {
        console.log('error', error);
      });

  }



}
