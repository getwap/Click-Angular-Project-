import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Component, OnInit} from '@angular/core';
import {filter,map} from 'rxjs/operators';

import { isPresent } from 'app/core/util/operators';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import {IHostedPayment, HostedPayment, ISubmit, Submit, IPayment, Payment} from './Submit-payment.model';
// import {IPayment,Payment} from "../../entities/payment/payment.model";

import {SharedconfirmService} from 'app/shared/sharedconfirm';


// export type EntityResponseTypes = HttpResponse<newUrl>;
export type EntityResponseType = HttpResponse<ISubmit>;
export type EntityArrayResponseType = HttpResponse<ISubmit[]>;





@Injectable({providedIn: 'root'})
export class SubmitService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/payments');
  // private baseUrl = "http://localhost:8080/routing";
  protected Url2 = this.applicationConfigService.getEndpointFor('api/amount')
  protected url = this.applicationConfigService.getEndpointFor('api/routing')
  protected url3 = this.applicationConfigService.getEndpointFor('api/paypal')
  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService, private sharedService: SharedconfirmService ) {}



  request(){
    return this.Url2
  }

  public getAmount(payment:any){
    return this.http.post(`${this.Url2}`,payment,{responseType:'text' as 'json'})

  }

  getPaypal():any{
    return this.http.get<String>(`${this.url3}`, {observe:'response'});
  }


  getHostedPayment(): any {
    return this.http.get<IHostedPayment>(`${this.url}`, {observe: 'response'});

}


  // getHostedPayment(): any{
  //   return this.http.get(`${this.url}`, { observe: 'response' });
  // }
  //
  // getUrl(new_url: String): Observable<Url[]>{
  //
  //  return this.http.get<Url[]>(`${this.baseUrl}${new_url}`);
  // }

  // Url(){
  //   return this.http.get<any>(`${this.baseUrl}`)
  // }

  //
  // getUrl(){
  //
  //   const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  //   this.http.get(this.baseUrl,{ headers, responseType: 'text'});
  //   console.log(headers)
  //
  // }


  create(submit: ISubmit):Observable<EntityResponseType>{
    return this.http.post<ISubmit>(this.resourceUrl, submit, { observe: 'response' });
}
  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ISubmit>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  open1(){

  }


}

// @Injectable({ providedIn: 'root' })
// export class SubmitService {
//   protected resourceUrl = this.applicationConfigService.getEndpointFor('api/payments');
//
//   constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {}
//
//   create(payment: ISubmit): Observable<EntityResponseType> {
//     return this.http.post<ISubmit>(this.resourceUrl, payment, { observe: 'response' });
//   }
//
//   update(payment: ISubmit): Observable<EntityResponseType> {
//     return this.http.put<ISubmit>(`${this.resourceUrl}/${getPaymentIdentifier(payment) as number}`, payment, { observe: 'response' });
//   }
//
//   partialUpdate(payment: ISubmit): Observable<EntityResponseType> {
//     return this.http.patch<ISubmit>(`${this.resourceUrl}/${getPaymentIdentifier(payment) as number}`, payment, { observe: 'response' });
//   }
//
//   find(id: number): Observable<EntityResponseType> {
//     return this.http.get<ISubmit>(`${this.resourceUrl}/${id}`, { observe: 'response' });
//   }
//
//   query(req?: any): Observable<EntityArrayResponseType> {
//     const options = createRequestOption(req);
//     return this.http.get<ISubmit[]>(this.resourceUrl, { params: options, observe: 'response' });
//   }
//
//   delete(id: number): Observable<HttpResponse<{}>> {
//     return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
//   }
//
//   addPaymentToCollectionIfMissing(paymentCollection: ISubmit[], ...paymentsToCheck: (ISubmit | null | undefined)[]): ISubmit[] {
//     const payments: ISubmit[] = paymentsToCheck.filter(isPresent);
//     if (payments.length > 0) {
//       const paymentCollectionIdentifiers = paymentCollection.map(paymentItem => getPaymentIdentifier(paymentItem)!);
//       const paymentsToAdd = payments.filter(paymentItem => {
//         const paymentIdentifier = getPaymentIdentifier(paymentItem);
//         if (paymentIdentifier == null || paymentCollectionIdentifiers.includes(paymentIdentifier)) {
//           return false;
//         }
//         paymentCollectionIdentifiers.push(paymentIdentifier);
//         return true;
//       });
//       return [...paymentsToAdd, ...paymentCollection];
//     }
//     return paymentCollection;
//   }
// }
