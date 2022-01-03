import { Routes } from '@angular/router';

import { activateRoute } from './activate/activate.route';
import { passwordRoute } from './password/password.route';
import { passwordResetFinishRoute } from './password-reset/finish/password-reset-finish.route';
import { passwordResetInitRoute } from './password-reset/init/password-reset-init.route';
import { registerRoute } from './register/register.route';
import { sessionsRoute } from './sessions/sessions.route';
import { settingsRoute } from './settings/settings.route';
import {submitRoute} from './submit-payment/submit-payment.route';
// import {confirmRoute} from './confirm-information/confirm-information.route';
import {processingRoute} from './processing-payment/processing-payment.route';
import {confirmRoute} from './confirm/confirm.route';
const ACCOUNT_ROUTES = [
  submitRoute,
  confirmRoute,
  processingRoute,
  activateRoute,
  passwordRoute,
  passwordResetFinishRoute,
  passwordResetInitRoute,
  registerRoute,
  sessionsRoute,
  settingsRoute,
  confirmRoute
];

export const accountState: Routes = [
  {
    path: '',
    children: ACCOUNT_ROUTES,
  },
];
