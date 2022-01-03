// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//
// import { ISubmit, Submit } from './Submit-payment.model';
//
// import { SubmitService } from './submit-payment.service';
//
// describe('Submiit Service', () => {
//   let service: SubmitService;
//   let httpMock: HttpTestingController;
//   let elemDefault: ISubmit;
//   let expectedResult: ISubmit | ISubmit[] | boolean | null;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//     });
//     expectedResult = null;
//     service = TestBed.inject(SubmitService);
//     httpMock = TestBed.inject(HttpTestingController);
//
//     elemDefault = {
//       id: 0,
//       cik: 'AAAAAAA',
//       ccc: 'AAAAAAA',
//       payment_amount: 'AAAAAAA',
//       name: 'AAAAAAA',
//       email: 'AAAAAAA',
//       phone: 'AAAAAAA',
//     };
//   });
//
//   describe('Service methods', () => {
//     it('should find an element', () => {
//       const returnedFromService = Object.assign({}, elemDefault);
//
//       service.find(123).subscribe(resp => (expectedResult = resp.body));
//
//       const req = httpMock.expectOne({ method: 'GET' });
//       req.flush(returnedFromService);
//       expect(expectedResult).toMatchObject(elemDefault);
//     });
//
//     it('should create a Payment', () => {
//       const returnedFromService = Object.assign(
//         {
//           id: 0,
//         },
//         elemDefault
//       );
//
//       const expected = Object.assign({}, returnedFromService);
//
//       service.create(new Submit()).subscribe(resp => (expectedResult = resp.body));
//
//       const req = httpMock.expectOne({ method: 'POST' });
//       req.flush(returnedFromService);
//       expect(expectedResult).toMatchObject(expected);
//     });
//
//     it('should update a Payment', () => {
//       const returnedFromService = Object.assign(
//         {
//           id: 1,
//           cik: 'BBBBBB',
//           ccc: 'BBBBBB',
//           payment_amount: 'BBBBBB',
//           name: 'BBBBBB',
//           email: 'BBBBBB',
//           phone: 'BBBBBB',
//         },
//         elemDefault
//       );
//
//       const expected = Object.assign({}, returnedFromService);
//
//       service.update(expected).subscribe(resp => (expectedResult = resp.body));
//
//       const req = httpMock.expectOne({ method: 'PUT' });
//       req.flush(returnedFromService);
//       expect(expectedResult).toMatchObject(expected);
//     });
//
//     it('should partial update a Payment', () => {
//       const patchObject = Object.assign(
//         {
//           ccc: 'BBBBBB',
//           email: 'BBBBBB',
//           phone: 'BBBBBB',
//         },
//         new Submit()
//       );
//
//       const returnedFromService = Object.assign(patchObject, elemDefault);
//
//       const expected = Object.assign({}, returnedFromService);
//
//       service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));
//
//       const req = httpMock.expectOne({ method: 'PATCH' });
//       req.flush(returnedFromService);
//       expect(expectedResult).toMatchObject(expected);
//     });
//
//     it('should return a list of Payment', () => {
//       const returnedFromService = Object.assign(
//         {
//           id: 1,
//           cik: 'BBBBBB',
//           ccc: 'BBBBBB',
//           payment_amount: 'BBBBBB',
//           name: 'BBBBBB',
//           email: 'BBBBBB',
//           phone: 'BBBBBB',
//         },
//         elemDefault
//       );
//
//       const expected = Object.assign({}, returnedFromService);
//
//       service.query().subscribe(resp => (expectedResult = resp.body));
//
//       const req = httpMock.expectOne({ method: 'GET' });
//       req.flush([returnedFromService]);
//       httpMock.verify();
//       expect(expectedResult).toContainEqual(expected);
//     });
//
//     it('should delete a Payment', () => {
//       service.delete(123).subscribe(resp => (expectedResult = resp.ok));
//
//       const req = httpMock.expectOne({ method: 'DELETE' });
//       req.flush({ status: 200 });
//       expect(expectedResult);
//     });
//
//     describe('addPaymentToCollectionIfMissing', () => {
//       it('should add a Payment to an empty array', () => {
//         const submit: ISubmit = { id: 123 };
//         expectedResult = service.addPaymentToCollectionIfMissing([], submit);
//         expect(expectedResult).toHaveLength(1);
//         expect(expectedResult).toContain(submit);
//       });
//
//       it('should not add a Payment to an array that contains it', () => {
//         const payment: ISubmit = { id: 123 };
//         const paymentCollection: ISubmit[] = [
//           {
//             ...payment,
//           },
//           { id: 456 },
//         ];
//         expectedResult = service.addPaymentToCollectionIfMissing(paymentCollection, payment);
//         expect(expectedResult).toHaveLength(2);
//       });
//
//       it("should add a Payment to an array that doesn't contain it", () => {
//         const payment: ISubmit = { id: 123 };
//         const paymentCollection: ISubmit[] = [{ id: 456 }];
//         expectedResult = service.addPaymentToCollectionIfMissing(paymentCollection, payment);
//         expect(expectedResult).toHaveLength(2);
//         expect(expectedResult).toContain(payment);
//       });
//
//       it('should add only unique Payment to an array', () => {
//         const paymentArray: ISubmit[] = [{ id: 123 }, { id: 456 }, { id: 4957 }];
//         const paymentCollection: ISubmit[] = [{ id: 123 }];
//         expectedResult = service.addPaymentToCollectionIfMissing(paymentCollection, ...paymentArray);
//         expect(expectedResult).toHaveLength(3);
//       });
//
//       it('should accept varargs', () => {
//         const payment: ISubmit = { id: 123 };
//         const payment2: ISubmit = { id: 456 };
//         expectedResult = service.addPaymentToCollectionIfMissing([], payment, payment2);
//         expect(expectedResult).toHaveLength(2);
//         expect(expectedResult).toContain(payment);
//         expect(expectedResult).toContain(payment2);
//       });
//
//       it('should accept null and undefined values', () => {
//         const payment: ISubmit = { id: 123 };
//         expectedResult = service.addPaymentToCollectionIfMissing([], null, payment, undefined);
//         expect(expectedResult).toHaveLength(1);
//         expect(expectedResult).toContain(payment);
//       });
//
//       it('should return initial array if no Payment is added', () => {
//         const paymentCollection: ISubmit[] = [{ id: 123 }];
//         expectedResult = service.addPaymentToCollectionIfMissing(paymentCollection, undefined, null);
//         expect(expectedResult).toEqual(paymentCollection);
//       });
//     });
//   });
//
//   afterEach(() => {
//     httpMock.verify();
//   });
// });
