import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ISubmit} from '../submit-payment/Submit-payment.model';
import {SharedconfirmService} from 'app/shared/sharedconfirm';
import {PaymentService} from "../../entities/payment/service/payment.service";
import {Payment} from "../../entities/payment/payment.model";
import {Location} from '@angular/common';
import {Router, Route} from '@angular/router';


@Component({
  selector: 'jhi-processing-payment',
  templateUrl: './processing-payment.component.html' ,


})
export class ProcessingPaymentComponent implements OnInit{

  submit: ISubmit | null = null;
  message?: any;
  data: any
  datax: any;
  href: any;
  sessionID: any;


  constructor(protected activatedRoute: ActivatedRoute,
              private paymentService: PaymentService,
              private sharedService: SharedconfirmService,
              private router: Router,
              private route:ActivatedRoute
              ) {}

  ngOnInit(){

    console.log("hello world")

    this.savePayment();

    // this.href =this.router;
    // console.log(this.router.url)


    const session = this.route.snapshot.queryParamMap.get('hostedCheckoutId')
    console.log(session)
    this.sessionID = session;
    // this.session = sessionStorage.getItem("sessionID")

    this.message = this.sharedService.getMessage()
    console.log(this.message[0])

    this.activatedRoute.data.subscribe(({submit}) => {

    this.submit = submit; });

  // this.message = this.sharedService.getMessage()

}
  savePayment(): void {
    const payment = new Payment();
    payment.cik = sessionStorage.getItem("cik");
    payment.ccc = sessionStorage.getItem("ccc");
    payment.payment_amount = Number(sessionStorage.getItem("pay_amount"));

    payment.name = sessionStorage.getItem("name");
    payment.email = sessionStorage.getItem("email");
    payment.phone = sessionStorage.getItem("phone");


    console.log(payment.payment_amount)
    // console.log(this.session)
    console.log(this.href)

    this.datax = payment.payment_amount;


    this.paymentService.create(payment).subscribe(response => {
      console.log(response)

    })
  }
  previousState(): void {
    window.history.back();
  }
  closePage(){
    window.close();
  }
}



















  //tslint:disable-next-line:no-input-rename
  // @Input ('forms') formTexts: any ;

  // @Input('parentText') parentTextBoxValue:any;




// constructor(){








//   @Output() myOutput:EventEmitter<any>= new EventEmitter;
//   outMessage:any="hello world"


// sendValues(){

//   this.myOutput.emit(this.outMessage);





