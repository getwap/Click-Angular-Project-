
import {Route} from '@angular/router';

import {ConfirmComponent} from "./confirm.component";


export const confirmRoute: Route = {
  path: 'confirm',
  component: ConfirmComponent,

  data: {
    pageTitle: 'confirm',
  },
};
