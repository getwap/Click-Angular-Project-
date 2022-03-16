//package com.myapp.click.domain;
//
//import com.myapp.click.utility.Configuration;
//import com.paypal.exception.*;
//import com.paypal.sdk.exceptions.PayPalException;
//import org.json.JSONObject;
//import org.xml.sax.SAXException;
//import urn.ebay.api.PayPalAPI.PayPalAPIInterfaceServiceService;
//import urn.ebay.api.PayPalAPI.SetExpressCheckoutReq;
//import urn.ebay.api.PayPalAPI.SetExpressCheckoutRequestType;
//import urn.ebay.api.PayPalAPI.SetExpressCheckoutResponseType;
//import urn.ebay.apis.CoreComponentTypes.BasicAmountType;
//import urn.ebay.apis.eBLBaseComponents.CurrencyCodeType;
//import urn.ebay.apis.eBLBaseComponents.PaymentActionCodeType;
//import urn.ebay.apis.eBLBaseComponents.PaymentDetailsType;
//import urn.ebay.apis.eBLBaseComponents.SetExpressCheckoutRequestDetailsType;
//
//import javax.xml.parsers.ParserConfigurationException;
//import javax.xml.xpath.XPathExpressionException;
//import java.io.IOException;
//import java.util.Arrays;
//import java.util.Map;
//
//public class SetExpressCheckout {
//    SetExpressCheckoutResponseType setExpressCheckoutResponse;
//
//    public String setExpressCheckout() throws PayPalException, XPathExpressionException, ClientActionRequiredException, SSLConfigurationException, MissingCredentialException, InvalidResponseDataException, InvalidCredentialException, IOException, ParserConfigurationException, HttpErrorException, InterruptedException, SAXException {
//
//        Long userId = 5l;
//        String paymentAmount = "25";
//        String returnURL = "http://localhost:9000/payment-save";
//        String cancelURL = "http://localhost:9000/";
//        PaymentActionCodeType paymentAction = PaymentActionCodeType.SALE;
//        CurrencyCodeType currencyCode = CurrencyCodeType.EUR;
//
//        Map<String,String> configurationMap =  Configuration.getAcctAndConfig();
//        // Creating service wrapper object to make an API call by loading configuration map.
//        PayPalAPIInterfaceServiceService service = new PayPalAPIInterfaceServiceService(configurationMap);
//
//        //construct the request
//        SetExpressCheckoutRequestType setExpressCheckoutReq = new SetExpressCheckoutRequestType();
//        setExpressCheckoutReq.setVersion("63.0");
//
//        //construct the details for the request
//        SetExpressCheckoutRequestDetailsType details = new SetExpressCheckoutRequestDetailsType();
//
//        PaymentDetailsType paymentDetails = new PaymentDetailsType();
//        paymentDetails.setOrderDescription("PayGov Test Order");
//        paymentDetails.setInvoiceID("INVOICE-" + Math.random());
//        BasicAmountType orderTotal = new BasicAmountType();
//        orderTotal.setValue(paymentAmount);
//        orderTotal.setCurrencyID(currencyCode);
//        paymentDetails.setOrderTotal(orderTotal);
//        paymentDetails.setPaymentAction(paymentAction);
//        details.setPaymentDetails(Arrays.asList(new PaymentDetailsType[]{paymentDetails}));
//
//        //List<PaymentDetailsItemType> lineItems = new ArrayList<PaymentDetailsItemType>();
//
//
//        details.setReturnURL(returnURL);
//        details.setCancelURL(cancelURL);
//        details.setCustom(userId.toString());
//
//
//        setExpressCheckoutReq.setSetExpressCheckoutRequestDetails(details);
//
//        SetExpressCheckoutReq expressCheckoutReq = new SetExpressCheckoutReq();
//        expressCheckoutReq.setSetExpressCheckoutRequest(setExpressCheckoutReq);
//
//
//        SetExpressCheckoutResponseType setExpressCheckoutResponse = service.setExpressCheckout(expressCheckoutReq);
//
//        //String RedirectURL = ("https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=" + setExpressCheckoutResponse.getToken());
//
//        String token = setExpressCheckoutResponse.getToken();
//
//        //GetExpressCheckout getExpressCheckout = new GetExpressCheckout();
//        //GetExpressCheckoutDetailsResponseDetailsType getECResponseDetail =
//        //getExpressCheckout.getExpressCheckoutDetails(setExpressCheckoutResponse.getToken());
//
//        //DoExpressCheckout doExpressCheckout = new DoExpressCheckout();
//        //doExpressCheckout.doExpressCheckoutService(getECResponseDetail);
//
//
//        return JSONObject.quote(token);
//
//    }
//
//}
