
import {SharedconfirmService} from 'app/shared/sharedconfirm';

export interface IHostedPayment {
  RETURNMAC?: string;
  hostedCheckoutId?: string;
  partialRedirectUrl?: string;
}

export class HostedPayment implements IHostedPayment {
  constructor(
    public RETURNMAC?: string,
    public hostedCheckoutId?: string,
    public partialRedirectUrl?: string,
  ) {}
}

// export interface Payment {
//   id?: string;
//   cik?: string | null;
//   ccc?: string | null;
//   payment_amount?: string | null;
//   name?: string | null;
//   email?: string | null;
//   phone?: string | null;
// }







export interface ISubmit {
  id?: string;
  cik?: string | null;
  ccc?: string | null;
  payment_amount?: number | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
}

// export interface newUrl {
//   new_url?:any;
// }
//
// export class Url implements newUrl{
//   public new_url?: any
//
// }
//
// export interface IHostedObject{
//   header : any,
//   status : any,
//   statusText : any,
//   url : string,
//   ok : any,
//   name : any;
//
//
// }

// export class HostedPayment implements  IHostedpayment{
//   constructor(public RETURNMAC?: String,
//               hostedchecoutId?: String,
//               partialRedirectUrl?: String,
//               ) {}
// }

export class Submit implements ISubmit {
  constructor(
    public id?: string,
    public cik?: string | null,
    public ccc?: string | null,
    public payment_amount?: number | null,
    public name?: string | null,
    public email?: string | null,
    public phone?: string | null
  ) {}
}
//
// export class payment implements Payment {
//   constructor(
//     public id?: string,
//     public cik?: string | null,
//     public ccc?: string | null,
//     public payment_amount?: string | null,
//     public name?: string | null,
//     public email?: string | null,
//     public phone?: string | null
//   ) {}
// }
export interface IPayment {
  id?: number;
  cik?: string | null;
  ccc?: string | null;
  payment_amount?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
}

export class Payment implements IPayment {
  constructor(
    public id?: number,
    public cik?: string | null,
    public ccc?: string | null,
    public payment_amount?: string | null,
    public name?: string | null,
    public email?: string | null,
    public phone?: string | null
  ) {}
}

export function getPaymentIdentifier(payment: IPayment): number | undefined {
  return payment.id;
}

// export function getPaymentIdentifier(submit: ISubmit): number | undefined {
//   return submit.id;
// }
