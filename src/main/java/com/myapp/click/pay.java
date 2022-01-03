//package com.myapp.click;
//import com.myapp.click.domain.Payment;
//import com.myapp.click.domain.User;
//import com.myapp.click.service.PaymentService;
//
//import com.ingenico.connect.gateway.sdk.java.Client;
//import com.ingenico.connect.gateway.sdk.java.Factory;
//import com.ingenico.connect.gateway.sdk.java.domain.definitions.Address;
//import com.ingenico.connect.gateway.sdk.java.domain.definitions.AmountOfMoney;
//import com.ingenico.connect.gateway.sdk.java.domain.hostedcheckout.CreateHostedCheckoutRequest;
//import com.ingenico.connect.gateway.sdk.java.domain.hostedcheckout.CreateHostedCheckoutResponse;
//import com.ingenico.connect.gateway.sdk.java.domain.hostedcheckout.definitions.HostedCheckoutSpecificInput;
//import com.ingenico.connect.gateway.sdk.java.domain.payment.definitions.Customer;
//import com.ingenico.connect.gateway.sdk.java.domain.payment.definitions.Order;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.servlet.ModelAndView;
//import org.springframework.beans.factory.annotation.Autowired;
//
//import java.io.File;
//
//@RestController
//@CrossOrigin(origins = "*")
//
//public class pay {
//
//
//    File propertiesUrl = new File("/home/ded_sec/Documents/click/src/main/resources/application.properties");
//
//    Client client = Factory.createClient(propertiesUrl.toURI(), "50deb26213446e7b", "IU7Pkklr8wr/np+GUDyjrQ7gKgt1spEe+ogOkLyTYzA=");
//
////    private final PaymentService paymentService;
////
////    public pay(PaymentService paymentService) {
////        this.paymentService = paymentService;
////    }
//
//
//    @GetMapping(value= "/routing")
//
//    public  CreateHostedCheckoutResponse payN() { //"or make it void if it have some error"
//
//
//            String amount = amount.getPayment_amount();
////        RedirectView redirectView = new RedirectView();
////        paymentService.PayService();
////        System.out.println("{{**************}}");
//
//        System.out.println("[[[[[[[[ inside ]]]]]]]]]]]]]");
//        System.out.println("[[[[[[[[ 1 ]]]]]]]]]]]]]");
//
//
//        HostedCheckoutSpecificInput hostedCheckoutSpecificInput = new HostedCheckoutSpecificInput();
//        hostedCheckoutSpecificInput.setLocale("en_GB");
//        hostedCheckoutSpecificInput.setVariant("testVariant");
//        hostedCheckoutSpecificInput.setReturnUrl("http://localhost:8080/account/processing-payment");
//        System.out.println("[[[[[[[[ 2 ]]]]]]]]]]]]]");
//
//        String s_amount = amount;
//        long l_amount = Long.parseLong(s_amount);
//
//        AmountOfMoney amountOfMoney = new AmountOfMoney();
//        amountOfMoney.setAmount(l_amount);
//        amountOfMoney.setCurrencyCode("EUR");
//
//        Address billingAddress = new Address();
//        billingAddress.setCountryCode("US");
//
//        Customer customer = new Customer();
//        customer.setLocale("en_US");
//        customer.setMerchantCustomerId("1166");
//        customer.setBillingAddress(billingAddress);
//
//        Order order = new Order();
//        order.setAmountOfMoney(amountOfMoney);
//        order.setCustomer(customer);
//        System.out.println("[[[[[[[[ 3 ]]]]]]]]]]]]]");
//
//        CreateHostedCheckoutRequest body = new CreateHostedCheckoutRequest();
//        System.out.println("[[[[[[[[ 5 ]]]]]]]]]]]]]");
//
//        body.setHostedCheckoutSpecificInput(hostedCheckoutSpecificInput);
//        System.out.println("[[[[[[[[ 4 ]]]]]]]]]]]]]");
//
//        body.setOrder(order);
//        System.out.println("[[[[[[[[ 6 ]]]]]]]]]]]]]");
//
//
//        CreateHostedCheckoutResponse response = client.merchant("1166").hostedcheckouts().create(body);
//        System.out.println("[[[[[[[[ 8   ]]]]]]]]]]]]]");
//
//
//        String new_url = response.getPartialRedirectUrl();
//        System.out.println(new_url);
//        System.out.println("################################");
//
//
//
//        return response;
//
//
////
////        System.out.println("https://payment." + new_url + " #############");
////        System.out.println(new_url);
////
//////        redirectView.setUrl(new_url);
////        return new RedirectView(new_url);
//////
//
//
//    }
//
////    @PostMapping("/amount")
////        public String amount(@RequestBody Payment payment){
////        return "hi" + payment.getPayment_amount();
////    }
//
//
////    @RequestMapping (value = "/amount", method=RequestMethod.POST )
////        public String recoverPass(@RequestParam("payment_amount") String amount){
////        System.out.println(amount);
////        return amount;
////
////    }
//
//
//}
//
//
