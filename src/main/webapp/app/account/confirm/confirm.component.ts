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

   timeLeft: number = 1000;
  interval: any;
  loading = true;

  message!: any [];
  redirectUrl!: any;
  redirectUrl2!: any;
  closeResult: any;
  String1:any = "https://payment.";
  String2: any;
  String3:any;
  String4:any;
  String5:any;
  submit:any;
  data: any;
  sessionID: any;
  mockDatas: any;

  constructor(private sharedService: SharedconfirmService,
              private confirmService: ConfirmService,
              protected modalService:NgbModal,
              protected activatedRoute: ActivatedRoute,
              protected submitService: SubmitService,
              protected router : Router

              ) {
  }

  ngOnInit(): void {


      this.confirmService.getMockData().subscribe((result:any)=>{
        this.mockDatas = result;

        console.log("####################")
        console.log(result)
        console.log("####################")
        console.log(this.mockDatas.body.name)
        console.log(this.mockDatas.body.address)
        console.log("####################")

      })




    this.message = this.sharedService.getMessage();
    console.log("##################################")
    console.log(this.message)
    console.log(("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"))

    console.log(sessionStorage.getItem("phone"))

    // this.confirmService.getMockData()
    // console.log(this.confirmService.getMockData());

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

  payPal(){
    this.submitService.getPaypal().subscribe((result:any)=>{
      this.redirectUrl2 = result;
      this.String4 = this.redirectUrl2.body;
      console.log(this.String4)

    })
  }


    startTimer(){
    this.interval = setInterval(()=>{
      if (this.timeLeft > 0){
        this.timeLeft --;
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

          this.activatedRoute.data.subscribe(() => {
            // this.updateForm(submit);
          });

          console.log("##################################")
          console.log(this.message[0])
          console.log(this.message[1])
          // console.log(this.message[2])
          // console.log(this.message[3])
          // console.log(this.message[4])
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

          console.log(sessionStorage.getItem("phone"))
          // console.log(sessionStorage.getItem("sessionID"))
          this.submitService.getHostedPayment().subscribe((result:any)=>{
            this.redirectUrl = result;
            this.String2 = this.redirectUrl.body.partialRedirectUrl;
            this.String3 = this.String1.concat(this.String2.toString());
            window.location.href= this.String3
            console.log(this.String3)

          })







        })



      }
    })


  }


  paypal(){
    this.confirmService.getPaypal().subscribe((result:any)=>{
      this.redirectUrl2 = result;
      this.String5 = this.redirectUrl2.body;
      console.log(this.String5)
      window.location.href = this.String5


    });
  }
  // redirect(){
  //   window.location.href = this.String5
  // }


  Url2(){




    this.pauseTimer();
    this.loading = false;
    this.submitService.getHostedPayment().subscribe((result:any)=>{
      this.redirectUrl = result;
      this.String2 = this.redirectUrl.body.partialRedirectUrl;
      this.String3 = this.String1.concat((this.String2.toString()));
      window.location.href=this.String3


      });

  //
  //   this.activatedRoute.data.subscribe(() => {
  //     // this.updateForm(submit);
  //   });
  //
  //   console.log("##################################")
  //   console.log(this.message[2])
  //   console.log(("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"))
  //   let cik = this.message[0];
  //   sessionStorage.setItem('cik',this.message[0] );
  //   sessionStorage.setItem('ccc',this.message[1]);
  //   sessionStorage.setItem('pay_amount',this.message[2] );
  //   sessionStorage.setItem('name',this.message[3] );
  //   sessionStorage.setItem('email',this.message[4] );
  //   sessionStorage.setItem('phone',this.message[5] );
  //   sessionStorage.setItem('sessionId', this.sessionID)
  //   console.log(sessionStorage.getItem("phone"))
  //
  // console.log(sessionStorage.getItem("phone"))
  //   // console.log(sessionStorage.getItem("sessionID"))
  //   this.submitService.getHostedPayment().subscribe((result:any)=>{
  //     this.redirectUrl = result;
  //     this.String2 = this.redirectUrl.body.partialRedirectUrl;
  //     this.String3 = this.String1.concat(this.String2.toString());
  //     window.location.href= this.String3
  //     console.log(this.String3)
  //
  //   })

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

  back(){
    window.history.back()
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



