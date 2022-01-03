import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {IHostedPayment, HostedPayment} from "./Submit-payment.model";

import {ISubmit, Submit} from './Submit-payment.model';
import { SubmitService } from './submit-payment.service';
import {IPayment, Payment} from "../../entities/payment/payment.model";
import {SharedconfirmService} from 'app/shared/sharedconfirm';
import {PaymentService} from "../../entities/payment/service/payment.service";
//
// import {IPayment, Payment} from "../../entities/payment/payment.model";
// import {PaymentService} from "../../entities/payment/service/payment.service";
// import {SharedconfirmService} from "../../shared/sharedconfirm";
//

@Component({
  selector: 'jhi-submit-payment',
  templateUrl: './submit-payment.component.html',

})

export class submitPaymentComponent implements OnInit {


  isSaving = false;
  data: any;
  parentPost: any[] = [];
  closeResult: any;
  openWindow: any;
  message!: any;
  Url: any;
  String1: any = "https://payment.";
  String2: any;
  String3: any;
  // isSaving = false;
  // data: any;
  pgData: any;
  mockData: any;
  loading = true;
  timeLeft: any = 10;
  interval: any;
  redirectUrl : any;




  editForm = this.fb.group({
    id: [],
    cik: [],
    ccc: [],
    payment_amount: [],
    name: [],
    email: [],
    phone: [],
  });


  constructor(private http: HttpClient,
              private modalService: NgbModal,
              // protected submitService: SubmitService,
              protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected fb: FormBuilder,
              protected paymentService: PaymentService,
              private sharedService: SharedconfirmService) {
  }


  close() {
    this.openWindow.close()

  }






  open1() {
    this.openWindow = window.open("http://www.cnn.com/", "CNN_WindowName");
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = 'closed with: ${result}';
    }, (reason) => {
      this.closeResult = 'dismissed ${this.getDismissReason(reason)}';

    });

  }


  private getDismissReason(reason: any): string {
    if (reason == ModalDismissReasons.ESC) {
      return 'by pressing esc';
    } else if (reason == ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on backdrop';
    } else {
      return 'with: ${reason}'
    }


  }
  // request2(){
  //   this.submitService.request()
  // }




  ngOnInit(): void {

    // this.activatedRoute.data.subscribe(({submit}) => {
    //   this.updateForm(submit);
    // });
    // this.message = this.sharedService.getMessage();
    //
    // this.submitService.getHostedPayment().subscribe((result:any)=>{
    //   this.redirectUrl = result;
    //   this.String2 = this.redirectUrl.body.partialRedirectUrl;
    //   this.String3 = this.String1.concat(this.String2.toString());
    //   // window.location.href= this.String3
    //   console.log(this.String3)
    // })

      // this.Url = JSON.stringify(result);
      // this.String1=JSON.parse(this.Url);
      // // this.String2 = this.Url.body.partialRedirectUrl;
      // window.location.href = this.String1.body;
      // console.log(result)
      // this.Url = result;
      //   // this.String2 = this.Url.body.partialRedirectUrl;
      //   // this.String3 = this.String1.concat(this.String2.toString());
      //   // // window.location.href = this.String3;
      //
      //   // console.log(this.String3)
  }

  // Url2(){
  //   this.activatedRoute.data.subscribe(({submit}) => {
  //     this.updateForm(submit);
  //   });
  // //   this.message = this.sharedService.getMessage();
  // //
  // //   this.submitService.getHostedPayment().subscribe((result:any)=>{
  // //     this.redirectUrl = result;
  // //     this.String2 = this.redirectUrl.body.partialRedirectUrl;
  // //     this.String3 = this.String1.concat(this.String2.toString());
  // //     // window.location.href= this.String3
  // //     console.log(this.String3)
  // //   })
  //
  // }
  //
  //
  // redirect(){
  //   window.location.href = this.String3
  // }


  //
  // redirect() {
  //   this.submitService.getHostedPayment().subscribe((result: any) => {
  //       this.Url = result;
  //       this.String2 = this.Url.body.partialRedirectUrl;
  //       this.String3 = this.String1.concat(this.String2.toString());
  //       this.newUrl = window.location.href = this.String3
  //     console.log(this.newUrl)
  //     }
  //   );
  // }s



  // onClose(event: any) {
  //   console.log(event);
  // }

  // get() {
  //   return this.submitService.getUrl()
  //   }
  //   console.log(Url)
  // }
  getUrl() {
    this.http.get('/routing').subscribe(
      response => {
        this.Url = response;
        console.log(URL)
      }
    )
  }

//   getUrl(){
//   this.http.get('http://localhost:8080/routing')
// .subscribe(response => console.log(response.text()))}
//   // getU() {
  //   this.submitService.getUrl('').subscribe((data: any) => {
  //     console.log(data)
  //
  //   })

  // save2(){
  //   const payment = this.createFromForm()
  //   this.subscribeToSaveResponse(this.paymentService.create(payment))
  // }
  // backupsave(data:any){
  //
  // }
  save(data:any): void {
    const payment = this.createFromForms();
    // const submit = this.data();
     this.router.navigate(['/account/confirm'])
    this.subscribeToSaveResponse(this.paymentService.amount(payment));
    this.sharedService.setMessage(data.cik, data.ccc, data.payment_amount, data.name, data.email, data.phone);

    // this.subscribeToSaveResponse(this.submitService.create(submit));



    console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")

    console.log(data)
    console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")



  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPayment>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }




  // protected subscribeToSaveResponse(result: Observable<HttpResponse<ISubmit>>): void {
  //   result.pipe(finalize(() => this.onSaveFinalize())).subscribe(
  //     () => this.onSaveSuccess(),
  //     () => this.onSaveError()
  //   );
  // }



  protected updateForm(payment: IPayment): void {
    this.editForm.patchValue({
      id: payment.id,
      cik: payment.cik,
      ccc: payment.ccc,
      payment_amount: payment.payment_amount,
      name: payment.name,
      email: payment.email,
      phone: payment.phone,
    });
  }
  previousState(): void {
    window.history.back();
  }



  protected createFromForms(): IPayment {
    return {
      ...new Payment(),
      id: this.editForm.get(['id'])!.value,
      cik: this.editForm.get(['cik'])!.value,
      ccc: this.editForm.get(['ccc'])!.value,
      payment_amount: this.editForm.get(['payment_amount'])!.value,
      name: this.editForm.get(['name'])!.value,
      email: this.editForm.get(['email'])!.value,
      phone: this.editForm.get(['phone'])!.value,
    };
  }





}
// previousState(): void {
//   window.history.back();
// }
//
// protected onSaveSuccess(): void {
//   this.previousState();
// }
//
// protected onSaveError(): void {
//   // Api for inheritance.
// }
//
// protected onSaveFinalize(): void {
//   this.isSaving = false;
// }



// save(): void {
//   this.isSaving = true;
//   const submit = this.createFromForm();
//   if(submit.id !== undefined){
//
//   }
//
//   // if (payment.id !== undefined) {
//   //   this.subscribeToSaveResponse(this.submitService.update(payment));
//   // } else {
//   //   this.subscribeToSaveResponse(this.submitService.create(payment));
// }

