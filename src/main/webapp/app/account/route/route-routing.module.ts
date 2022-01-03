import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RouteRoutingService} from "./route-routing-service";
import {submitPaymentComponent} from "../submit-payment/submit-payment.component";
// import {ConfirmInformationComponent} from "../confirm-information/confirm-information.component";
import {ProcessingPaymentComponent} from "../processing-payment/processing-payment.component";

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';

const routes: Routes = [
  {
    path:'',
    component: submitPaymentComponent,
    data: {
      defaultSort: 'id,asc',
    },
    canActivate: [UserRouteAccessService],
  },
  {
  //   path:':id/confirm',
  //   component: ConfirmInformationComponent,
  //   resolve: {
  //     account:RouteRoutingService,
  //   },
  //   canActivate: [UserRouteAccessService],
  // },
  // {
    path: 'processing',
    component: ProcessingPaymentComponent,
    resolve: {
      account: RouteRoutingService,
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule {}
