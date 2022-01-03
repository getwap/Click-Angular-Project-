// jest.mock('@angular/router');
//
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpResponse } from '@angular/common/http';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { FormBuilder } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { of, Subject } from 'rxjs';
//
// import { SubmitService } from './submit-payment.service';
// import { ISubmit, Submit } from './Submit-payment.model';
//
// import { submitPaymentComponent } from './submit-payment.component';
//
// describe('Payment Management Update Component', () => {
//   let comp: submitPaymentComponent;
//   let fixture: ComponentFixture<submitPaymentComponent>;
//   let activatedRoute: ActivatedRoute;
//   let paymentService: SubmitService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       declarations: [submitPaymentComponent],
//       providers: [FormBuilder, ActivatedRoute],
//     })
//       .overrideTemplate(submitPaymentComponent, '')
//       .compileComponents();
//
//     fixture = TestBed.createComponent(submitPaymentComponent);
//     activatedRoute = TestBed.inject(ActivatedRoute);
//     // submitService = TestBed.inject(SubmitService;
//
//     comp = fixture.componentInstance;
//   });
//
//   describe('ngOnInit', () => {
//     it('Should update editForm', () => {
//       const Submit: ISubmit = { id: 456 };
//
//       activatedRoute.data = of({ Submit });
//       comp.ngOnInit();
//
//       expect(comp.editForm.value).toEqual(expect.objectContaining(Submit));
//     });
//   });
//
//   describe('save', () => {
//     it('Should call update service on save for existing entity', () => {
//       // GIVEN
//       const saveSubject = new Subject<HttpResponse<Submit>>();
//       const payment = { id: 123 };
//       jest.spyOn(paymentService, 'update').mockReturnValue(saveSubject);
//       jest.spyOn(comp, 'previousState');
//       activatedRoute.data = of({ payment });
//       comp.ngOnInit();
//
//       // WHEN
//       comp.save();
//       expect(comp.isSaving).toEqual(true);
//       saveSubject.next(new HttpResponse({ body: payment }));
//       saveSubject.complete();
//
//       // THEN
//       expect(comp.previousState).toHaveBeenCalled();
//       expect(paymentService.update).toHaveBeenCalledWith(payment);
//       expect(comp.isSaving).toEqual(false);
//     });
//
//     it('Should call create service on save for new entity', () => {
//       // GIVEN
//       const saveSubject = new Subject<HttpResponse<Submit>>();
//       const submit = new Submit();
//       jest.spyOn(paymentService, 'create').mockReturnValue(saveSubject);
//       jest.spyOn(comp, 'previousState');
//       activatedRoute.data = of({ submit });
//       comp.ngOnInit();
//
//       // WHEN
//       comp.save();
//       expect(comp.isSaving).toEqual(true);
//       saveSubject.next(new HttpResponse({ body: submit }));
//       saveSubject.complete();
//
//       // THEN
//       expect(paymentService.create).toHaveBeenCalledWith(submit);
//       expect(comp.isSaving).toEqual(false);
//       expect(comp.previousState).toHaveBeenCalled();
//     });
//
//     it('Should set isSaving to false on error', () => {
//       // GIVEN
//       const saveSubject = new Subject<HttpResponse<Submit>>();
//       const payment = { id: 123 };
//       jest.spyOn(paymentService, 'update').mockReturnValue(saveSubject);
//       jest.spyOn(comp, 'previousState');
//       activatedRoute.data = of({ payment });
//       comp.ngOnInit();
//
//       // WHEN
//       comp.save();
//       expect(comp.isSaving).toEqual(true);
//       saveSubject.error('This is an error!');
//
//       // THEN
//       expect(paymentService.update).toHaveBeenCalledWith(payment);
//       expect(comp.isSaving).toEqual(false);
//       expect(comp.previousState).not.toHaveBeenCalled();
//     });
//   });
// });
