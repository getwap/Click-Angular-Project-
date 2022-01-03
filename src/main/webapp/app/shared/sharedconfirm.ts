import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root',})



export class SharedconfirmService {

  cik:any;
  ccc: any;
  payment_amount: any;
  name: any;
  email: any;
  phone: any;



  constructor(private httpClient:HttpClient) {
  }

  setMessage( cik:any,
  ccc: any,
  payment_amount: any,
  name: any,
  email: any,
  phone: any){
    this.cik= cik;
    this.ccc= ccc;
    this.payment_amount= payment_amount;
    this.name= name;
    this.email= email;
    this.phone= phone;

  }

  getMessage(){
    return new Array(this.cik, this.ccc,this.payment_amount,this.name,this.email,this.phone)
  }




}


