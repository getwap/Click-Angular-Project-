
import {Route} from '@angular/router';

import {submitPaymentComponent} from './submit-payment.component';

export const submitRoute: Route = {
  path: 'submit-payment',
  component: submitPaymentComponent,
  data: {
    pageTitle: 'submit-payment'
  },
};
