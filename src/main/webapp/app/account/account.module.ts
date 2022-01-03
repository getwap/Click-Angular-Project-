import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { SessionsComponent } from './sessions/sessions.component';
import { PasswordStrengthBarComponent } from './password/password-strength-bar/password-strength-bar.component';
import { RegisterComponent } from './register/register.component';
import { ActivateComponent } from './activate/activate.component';
import { PasswordComponent } from './password/password.component';
import { PasswordResetInitComponent } from './password-reset/init/password-reset-init.component';
import { PasswordResetFinishComponent } from './password-reset/finish/password-reset-finish.component';
import { SettingsComponent } from './settings/settings.component';
import { accountState } from './account.route';
import {submitPaymentComponent} from './submit-payment/submit-payment.component';
// import { ConfirmInformationComponent } from './confirm-information/confirm-information.component';
import { ProcessingPaymentComponent } from './processing-payment/processing-payment.component';
import { ConfirmComponent } from './confirm/confirm.component';
// import { ConfirmInfo2Component } from './confirm-info2/confirm-info2.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(accountState),
    FormsModule ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    PasswordStrengthBarComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SessionsComponent,
    SettingsComponent,
    submitPaymentComponent,
    // ConfirmInformationComponent,
    ProcessingPaymentComponent,
    ConfirmComponent,
    // ConfirmInfo2Component,
    // PgModalComponent,
    // PgSuccessComponent
  ],
})
export class AccountModule {}
