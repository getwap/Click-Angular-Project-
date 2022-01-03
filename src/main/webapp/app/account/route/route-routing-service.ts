import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Resolve, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Observable, of, EMPTY} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

import {ISubmit, Submit} from "../submit-payment/Submit-payment.model";
import {SubmitService} from "../submit-payment/submit-payment.service";
import {Payment} from "../../entities/payment/payment.model";


@Injectable ({providedIn: 'root'})
export class RouteRoutingService implements Resolve<ISubmit> {
  constructor(protected service: SubmitService, protected router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ISubmit> | Observable<never> {
    const id = route.params['id'];
    return this.service.find(id).pipe(
      mergeMap((payment: HttpResponse<Payment>) => {
        if (payment.body) {
          return of(payment.body);
        } else {
          this.router.navigate(['404']);
          return EMPTY;
        }
      })
    );
    return of(new Submit());
  }
}







