export interface IPayment {
  id?: number;
  cik?: string | null;
  ccc?: string | null;
  payment_amount?: number | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
}

export class Payment implements IPayment {
  constructor(
    public id?: number,
    public cik?: string | null,
    public ccc?: string | null,
    public payment_amount?: number | null,
    public name?: string | null,
    public email?: string | null,
    public phone?: string | null
  ) {}
}

export function getPaymentIdentifier(payment: IPayment): number | undefined {
  return payment.id;
}
