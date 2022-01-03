import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {SharedconfirmService} from "../../shared/sharedconfirm";
import {ConfirmService} from "./confirm.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {SubmitService} from "../submit-payment/submit-payment.service";


// import {NgbActiveModal , NgbModal} from  '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'jhi-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  timeLeft :any=1000;
  interval: any;
  loading = true;

  message!: any [];
  redirectUrl!: any;
  closeResult: any;
  String1:any = "https://payment.";
  String2: any;
  String3:any;
  submit:any;
  data: any;
  sessionID: any;

  constructor(private sharedService: SharedconfirmService,
              private confirmService: ConfirmService,
              protected modalService:NgbModal,
              protected activatedRoute: ActivatedRoute,
              protected submitService: SubmitService,
              protected router : Router

              ) {
  }

  ngOnInit(): void {


    this.message = this.sharedService.getMessage();
    console.log("##################################")
    console.log(this.message)
    console.log(("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"))

    // this.startTimer();


    // console.log(this.message)
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
  }
  startTimer(){
    this.interval = setInterval(()=>{
      if (this.timeLeft > 0){
        this.timeLeft--;
      }
      else {
        this.pauseTimer();
        this.loading = false;
        this.submitService.getHostedPayment().subscribe((result:any)=>{
          this.redirectUrl = result;
          this.String2 = this.redirectUrl.body.partialRedirectUrl;
          this.String3 = this.String1.concat((this.String2.toString()));
          window.location.href=this.String3

          this.sessionID = this.redirectUrl.body.hostedCheckoutId;
          console.log(this.sessionID)



        })


      }
    })

  }
  Url2(){


    this.activatedRoute.data.subscribe(() => {
      // this.updateForm(submit);
    });

    console.log("##################################")
    console.log(this.message[2])
    console.log(("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"))
    let cik = this.message[0];
    sessionStorage.setItem('cik',this.message[0] );
    sessionStorage.setItem('ccc',this.message[1]);
    sessionStorage.setItem('pay_amount',this.message[2] );
    sessionStorage.setItem('name',this.message[3] );
    sessionStorage.setItem('email',this.message[4] );
    sessionStorage.setItem('phone',this.message[5] );
    sessionStorage.setItem('sessionId', this.sessionID)

  console.log(sessionStorage.getItem("phone"))
    console.log(sessionStorage.getItem("sessionID"))
    this.submitService.getHostedPayment().subscribe((result:any)=>{
      this.redirectUrl = result;
      this.String2 = this.redirectUrl.body.partialRedirectUrl;
      this.String3 = this.String1.concat(this.String2.toString());
      window.location.href= this.String3
      console.log(this.String3)

    })

  }





  getHosted() {
    this.confirmService.getHostedPayment().subscribe((result: any) => {
      this.redirectUrl = result
      console.log(this.redirectUrl)

      // const modelRef = this.modalService.open(this.activeModal);

    })







  }

  pauseTimer():any {
    clearInterval(this.interval);
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = 'closed with: ${result}';
    }, (reason) => {
      this.closeResult = 'dismissed ${this.getDismissReason(reason)}';

    });
  }

  save(){

  }

//   open(): any{
//
//   }
}


export class PgModalComponent{


  //
  // constructor(public modalService: NgbModal,
  //            public activeModal: NgbActiveModal) {
  // }
  //





}



