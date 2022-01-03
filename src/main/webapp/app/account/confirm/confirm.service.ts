import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import {Observable} from 'rxjs';
import {ApplicationConfigService} from "../../core/config/application-config.service";
import {SharedconfirmService} from "../../shared/sharedconfirm";
import {IHostedPayment} from "../submit-payment/Submit-payment.model";

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  protected url = this.applicationConfigService.getEndpointFor('api/routing')

  constructor(private http: HttpClient,
              private  applicationConfigService: ApplicationConfigService,
              private sharedService: SharedconfirmService) { }


  getHostedPayment(){
    return this.http.get<IHostedPayment>(`${this.url}`, {observe: 'response'});
  }
}
