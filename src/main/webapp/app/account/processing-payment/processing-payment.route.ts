import {Route} from '@angular/router';

import { ProcessingPaymentComponent } from './processing-payment.component';

export const processingRoute: Route = {

    path: 'processing-payment',
    component: ProcessingPaymentComponent,
    data:{
        pageTitle: 'processing-payment'
    },

};