import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'purchasing-stages',
    loadChildren: () => import('./purchasing-stages/purchasing-stages.module').then( m => m.PurchasingStagesPageModule)
  },
  {
    path: 'payment-plan',
    loadChildren: () => import('./payment-plan/payment-plan.module').then( m => m.PaymentPlanPageModule)
  },
  {
    path: 'summary-transactions',
    loadChildren: () => import('./summary-transactions/summary-transactions.module').then( m => m.SummaryTransactionsPageModule)
  },
  {
    path: 'cash-receipt',
    loadChildren: () => import('./cash-receipt/cash-receipt.module').then( m => m.CashReceiptPageModule)
  },
  {
    path: 'peace-certificate',
    loadChildren: () => import('./peace-certificate/peace-certificate.module').then( m => m.PeaceCertificatePageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'rate-us',
    loadChildren: () => import('./rate-us/rate-us.module').then( m => m.RateUsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
