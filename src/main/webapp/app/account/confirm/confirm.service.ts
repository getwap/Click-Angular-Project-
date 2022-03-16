import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import {Observable} from 'rxjs';
import {ApplicationConfigService} from "../../core/config/application-config.service";
import {SharedconfirmService} from "../../shared/sharedconfirm";
import {IHostedPayment} from "../submit-payment/Submit-payment.model";
import {IMockPg} from "../submit-payment/Submit-payment.model";

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  protected url = this.applicationConfigService.getEndpointFor('api/routing')
  protected mockResourceUrl = this.applicationConfigService.getEndpointFor('api/mockbin')
  protected url2 = this.applicationConfigService.getEndpointFor('api/paypal')
  constructor(private http: HttpClient,
              private  applicationConfigService: ApplicationConfigService,
              private sharedService: SharedconfirmService) { }

  getPaypal(){
    return this.http.get<String>(`${this.url2}`,{observe:'response'});
  }
  getHostedPayment(){
    return this.http.get<IHostedPayment>(`${this.url}`, {observe: 'response'});
  }
  getMockData(): any {
    return this.http.get<String>(`${this.mockResourceUrl}`, { observe: 'response' });
  }
}
