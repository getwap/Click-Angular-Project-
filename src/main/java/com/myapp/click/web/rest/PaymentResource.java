package com.myapp.click.web.rest;

import com.myapp.click.domain.Payment;
import com.myapp.click.repository.PaymentRepository;
import com.myapp.click.service.PaymentService;
import com.myapp.click.web.rest.errors.BadRequestAlertException;

//import java.lang.Long;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.ResponseUtil;
//********************************************
import com.myapp.click.domain.Payment;
import com.myapp.click.domain.User;
import com.myapp.click.service.PaymentService;

import com.ingenico.connect.gateway.sdk.java.Client ;
import com.ingenico.connect.gateway.sdk.java.Factory;
import com.ingenico.connect.gateway.sdk.java.domain.definitions.Address;
import com.ingenico.connect.gateway.sdk.java.domain.definitions.AmountOfMoney;
import com.ingenico.connect.gateway.sdk.java.domain.hostedcheckout.CreateHostedCheckoutRequest;
import com.ingenico.connect.gateway.sdk.java.domain.hostedcheckout.CreateHostedCheckoutResponse;
import com.ingenico.connect.gateway.sdk.java.domain.hostedcheckout.definitions.HostedCheckoutSpecificInput;
import com.ingenico.connect.gateway.sdk.java.domain.payment.definitions.Customer;
import com.ingenico.connect.gateway.sdk.java.domain.payment.definitions.Order;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;
import java.io.File;

//********************************************

/**
 * REST controller for managing {@link com.myapp.click.domain.Payment}.
 */
@RestController
@RequestMapping("/api")
public class PaymentResource {

    //********************************************

    File propertiesUrl = new File("/home/ded_sec/Documents/click/src/main/resources/application.properties");

    Client client = Factory.createClient(propertiesUrl.toURI(), "50deb26213446e7b", "IU7Pkklr8wr/np+GUDyjrQ7gKgt1spEe+ogOkLyTYzA=");
    //********************************************
    private final Logger log = LoggerFactory.getLogger(PaymentResource.class);

    private static final String ENTITY_NAME = "payment";

   Payment  payAmount;

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PaymentService paymentService;

    private final PaymentRepository paymentRepository;

    public PaymentResource(PaymentService paymentService, PaymentRepository paymentRepository) {
        this.paymentService = paymentService;
        this.paymentRepository = paymentRepository;
    }

    //********************************************


    @GetMapping("/routing" )

    public  CreateHostedCheckoutResponse payN() throws URISyntaxException, IOException { //"or make it void if it have some error"

//            Payment result = payment;
//            String amount = result.getPayment_amount();
//        RedirectView redirectView = new RedirectView();
//        paymentService.PayService();
//        System.out.println("{{**************}}");


        System.out.println("[[[[[[[[ inside ]]]]]]]]]]]]]");
        System.out.println("[[[[[[[[ 1 ]]]]]]]]]]]]]");


        HostedCheckoutSpecificInput hostedCheckoutSpecificInput = new HostedCheckoutSpecificInput();
        hostedCheckoutSpecificInput.setLocale("en_GB");
        hostedCheckoutSpecificInput.setVariant("testVariant");
        hostedCheckoutSpecificInput.setReturnUrl("http://localhost:9000/account/processing-payment");
        System.out.println("[[[[[[[[ 2 ]]]]]]]]]]]]]");
//
//        Long amount = payAmount.getPayment_amount();
////         Number s_amount1 = "";
////        long s_amount = Long.parseLong(payAmount.getPayment_amount());
//            long l_amount = Long.parseLong(amount);


//        Long amount = new Long(payAmount.getPayment_amount());
        System.out.println("#####################################");
        System.out.println("#####################################");
        System.out.println("############################################");
        System.out.println("#####################################");
        System.out.println(payAmount);
        System.out.println("############################################");
        System.out.println("#####################################");
        System.out.println("#####################################");


        AmountOfMoney amountOfMoney = new AmountOfMoney();
        amountOfMoney.setAmount(payAmount.getPayment_amount().longValue());
        amountOfMoney.setCurrencyCode("EUR");

        Address billingAddress = new Address();
        billingAddress.setCountryCode("US");

        Customer customer = new Customer();
        customer.setLocale("en_US");
        customer.setMerchantCustomerId("1166");
        customer.setBillingAddress(billingAddress);

        Order order = new Order();
        order.setAmountOfMoney(amountOfMoney);
        order.setCustomer(customer);
        System.out.println("[[[[[[[[ 3 ]]]]]]]]]]]]]");

        CreateHostedCheckoutRequest body = new CreateHostedCheckoutRequest();
        System.out.println("[[[[[[[[ 5 ]]]]]]]]]]]]]");

        body.setHostedCheckoutSpecificInput(hostedCheckoutSpecificInput);
        System.out.println("[[[[[[[[ 4 ]]]]]]]]]]]]]");

        body.setOrder(order);
        System.out.println("[[[[[[[[ 6 ]]]]]]]]]]]]]");


        CreateHostedCheckoutResponse response = client.merchant("1166").hostedcheckouts().create(body);
        System.out.println("[[[[[[[[ 8   ]]]]]]]]]]]]]");


        String new_url = response.getPartialRedirectUrl();
        String new_id = response.getHostedCheckoutId();
        System.out.println("$$$$$$$$$$$$$$$$$$");
        System.out.println(new_id);
        System.out.println(new_url);
        System.out.println("################################");


        return response;
    }


        //********************************************

    /**
     * {@code POST  /payments} : Create a new payment.
     *
     * @param payment the payment to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new payment, or with status {@code 400 (Bad Request)} if the payment has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */

    @PostMapping("amount")
    public String getPayment(@Valid @RequestBody Payment payment) throws URISyntaxException{
        this.payAmount = payment;
        System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%%");
        System.out.println(payment.getPayment_amount());
        System.out.println("^^^^^^^^^^^^^^^^^^^^^^^^^^");
        return "payAmount";

    }


    @PostMapping("/payments")
    public ResponseEntity<Payment> createPayment(@RequestBody Payment payment) throws URISyntaxException {
        log.debug("REST request to save Payment : {}", payment);
        if (payment.getId() != null) {
            throw new BadRequestAlertException("A new payment cannot already have an ID", ENTITY_NAME, "idexists");
        }
        System.out.println("#####################################");
        System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        System.out.println("#####################################");
        System.out.println(payment);
//        String result1 = payment.getPayment_amount();
           Payment result = paymentService.save(payment);
//        Payment result = payment;

        return ResponseEntity

            .created(new URI("/api/payments/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /payments/:id} : Updates an existing payment.
     *
     * @param id the id of the payment to save.
     * @param payment the payment to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated payment,
     * or with status {@code 400 (Bad Request)} if the payment is not valid,
     * or with status {@code 500 (Internal Server Error)} if the payment couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/payments/{id}")
    public ResponseEntity<Payment> updatePayment(@PathVariable(value = "id", required = false) final Long id, @RequestBody Payment payment)
        throws URISyntaxException {
        log.debug("REST request to update Payment : {}, {}", id, payment);
        if (payment.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, payment.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!paymentRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Payment result = paymentService.save(payment);
        return ResponseEntity
            .ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, payment.getId().toString()))
            .body(result);
    }

    /**
     * {@code PATCH  /payments/:id} : Partial updates given fields of an existing payment, field will ignore if it is null
     *
     * @param id the id of the payment to save.
     * @param payment the payment to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated payment,
     * or with status {@code 400 (Bad Request)} if the payment is not valid,
     * or with status {@code 404 (Not Found)} if the payment is not found,
     * or with status {@code 500 (Internal Server Error)} if the payment couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/payments/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Payment> partialUpdatePayment(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Payment payment
    ) throws URISyntaxException {
        log.debug("REST request to partial update Payment partially : {}, {}", id, payment);
        if (payment.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, payment.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!paymentRepository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Payment> result = paymentService.partialUpdate(payment);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, payment.getId().toString())
        );
    }

    /**
     * {@code GET  /payments} : get all the payments.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of payments in body.
     */
    @GetMapping("/payments")
    public ResponseEntity<List<Payment>> getAllPayments(Pageable pageable) {
        log.debug("REST request to get a page of Payments");
        Page<Payment> page = paymentService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /payments/:id} : get the "id" payment.
     *
     * @param id the id of the payment to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the payment, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/payments/{id}")
    public ResponseEntity<Payment> getPayment(@PathVariable Long id) {
        log.debug("REST request to get Payment : {}", id);
        Optional<Payment> payment = paymentService.findOne(id);
        return ResponseUtil.wrapOrNotFound(payment);
    }

    /**
     * {@code DELETE  /payments/:id} : delete the "id" payment.
     *
     * @param id the id of the payment to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/payments/{id}")
    public ResponseEntity<Void> deletePayment(@PathVariable Long id) {
        log.debug("REST request to delete Payment : {}", id);
        paymentService.delete(id);
        return ResponseEntity
            .noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString()))
            .build();
    }
}
