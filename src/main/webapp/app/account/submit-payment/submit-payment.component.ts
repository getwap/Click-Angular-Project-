import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
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


  //frontend
  doNotMatch = false;
  error = false;
  success = false;


  // editForm = this.fb.group({
  //
  //   cik: [
  //     '',
  //     [
  //       Validators.required,
  //       Validators.maxLength(10),
  //       Validators.minLength(10),
  //       Validators.pattern(/^\S*$/),
  //       Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
  //     ],
  //   ],
  //   ccc: [
  //     '', [
  //     Validators.required,
  //     Validators.maxLength(8),
  //     Validators.minLength(8),
  //     Validators.pattern(/^\S*$/),
  //     Validators.pattern(/^[a-zA-Z0-9.,:&apos;&quot;]/)
  //   ],
  //   ],
  //
  //   payment_amount:[
  //     '', [
  //
  //     Validators.required,
  //     Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/),
  //     ],
  //
  //   ],
  //
  //   nameof: [
  //     '',[
  //     Validators.required
  //   ],
  //   ],
  //   email: [
  //     '',
  //     [
  //       Validators.required,
  //       Validators.minLength(5),
  //       Validators.maxLength(254),
  //       Validators.email]],
  //
  //   phone: [
  //     '',
  //     [
  //       Validators.required,
  //       Validators.minLength(10),
  //       Validators.maxLength(10),
  //       Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)]],
  //
  //
  //
  //
  //
  //
  //
  //
  // })

  //till this frontend

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
    cik: [ '',[
      Validators.required,
             Validators.maxLength(10),
           Validators.minLength(10),
            Validators.pattern(/^\S*$/),
            Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
         ]],


    ccc: ['', [
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(8),
      Validators.pattern(/^\S*$/),
      Validators.pattern(/^[a-zA-Z0-9.,:&apos;&quot;]/)
    ],],


    payment_amount: [ '', [

      Validators.required,
      Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)
    ]],

    name: [
      '',[
        Validators.required]

    ],

    email: [ '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(254),
        Validators.email]],

    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)]
    ],
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


  // check(){
  //   console.log(this.editForm.get(this.)!.value)
  // }




  close() {
    this.openWindow.close()

  }

  clean(){
    this.editForm.reset();
  }

  // check(){
  //   console.log(this.editForm.get(['cik'])!.value)
  // }
  //





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


  }

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
  // previousState(): void {
  //   window.history.back();
  // }
  previousState(){
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

