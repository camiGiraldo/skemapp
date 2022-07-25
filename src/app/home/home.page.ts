import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private router: Router) {}


  ngOnInit(): void {}

  openPurchasingStages() {
    this.router.navigate(['purchasing-stages']);
  }

  openPaymentPlans(){
    this.router.navigate(['payment-plan']);
  }

  openCashReceipt(){
    this.router.navigate(['cash-receipt']);
  }


}
