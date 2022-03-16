package com.myapp.click.domain;

import com.myapp.click.utility.Configuration;
import com.paypal.exception.*;
import com.paypal.sdk.exceptions.PayPalException;
import org.xml.sax.SAXException;
import urn.ebay.api.PayPalAPI.DoExpressCheckoutPaymentReq;
import urn.ebay.api.PayPalAPI.DoExpressCheckoutPaymentRequestType;
import urn.ebay.api.PayPalAPI.DoExpressCheckoutPaymentResponseType;
import urn.ebay.api.PayPalAPI.PayPalAPIInterfaceServiceService;
import urn.ebay.apis.eBLBaseComponents.*;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.util.Map;
import java.util.logging.Logger;

public class DoExpressCheckout {
    private Logger log = Logger.getLogger(String.valueOf(this.getClass()));
    public void doExpressCheckoutService(GetExpressCheckoutDetailsResponseDetailsType getECResponse) throws PayPalException, ClientActionRequiredException, SSLConfigurationException, MissingCredentialException, InvalidResponseDataException, InvalidCredentialException, IOException, ParserConfigurationException, HttpErrorException, InterruptedException, SAXException, ClientActionRequiredException, SSLConfigurationException, MissingCredentialException, InvalidResponseDataException, InvalidCredentialException, IOException, ParserConfigurationException, SAXException {

        //Map<String, String> configurationMap = Configuration.getAcctAndConfig();
        //PayPalAPIInterfaceServiceService service = new PayPalAPIInterfaceServiceService(configurationMap);

        /*DoExpressCheckoutPaymentRequestType pprequest = new DoExpressCheckoutPaymentRequestType();
        pprequest.setVersion("63.0");

        DoExpressCheckoutPaymentRequestDetailsType paymentDetailsRequestType = new DoExpressCheckoutPaymentRequestDetailsType();
        paymentDetailsRequestType.setToken(response.getToken());

        PayerInfoType payerInfo = response.getPayerInfo();
        paymentDetailsRequestType.setPayerID(payerInfo.getPayerID());

        PaymentDetailsType paymentDetails = (PaymentDetailsType) response.getPaymentDetails();
        //paymentDetails.getPaymentDetailsItem();


        paymentDetailsRequestType.setPaymentAction(paymentDetails.getPaymentAction());

        paymentDetailsRequestType.setPaymentDetails(response.getPaymentDetails());
        pprequest.setDoExpressCheckoutPaymentRequestDetails(paymentDetailsRequestType);

        DoExpressCheckoutPaymentReq doExpressCheckoutPaymentReq = new DoExpressCheckoutPaymentReq();
        doExpressCheckoutPaymentReq.setDoExpressCheckoutPaymentRequest(pprequest);

        DoExpressCheckoutPaymentResponseType ppresponse = service.doExpressCheckoutPayment(doExpressCheckoutPaymentReq);
        DoExpressCheckoutPaymentResponseDetailsType type = ppresponse.getDoExpressCheckoutPaymentResponseDetails();



        if (type != null){
            PaymentInfoType paymentInfo = (PaymentInfoType) type.getPaymentInfo();
            if (paymentInfo.getPaymentStatus().equals(PaymentStatusCodeType.COMPLETED)){
                log.info("=========================================================================");
                log.info("=========================================================================");
                log.info("=========================================================================");
                log.info("Payment completed.");
                log.info("=========================================================================");
                log.info("=========================================================================");
                log.info("=========================================================================");

                System.out.println("===================DO EXPRESS CHECKOUT RESPONSE===========================");
                System.out.println("==========================================================================");
                System.out.println("Payment completed");
                System.out.println("==========================================================================");
                System.out.println("==========================================================================");
                return true;
            }
            else {
                log.info("=========================================================================");
                log.info("=========================================================================");
                log.info("=========================================================================");
                log.info("Payment not completed.. (" + paymentInfo.getPaymentStatus() + ")");
                log.info("=========================================================================");
                log.info("=========================================================================");
                log.info("=========================================================================");

                System.out.println("===================DO EXPRESS CHECKOUT RESPONSE===========================");
                System.out.println("==========================================================================");
                System.out.println("Payment not completed.. (" + paymentInfo.getPaymentStatus() + ")");
                System.out.println("==========================================================================");
                System.out.println("==========================================================================");
                return false;
            }
        }
        else {
            log.info("Problem executing DoExpressCheckoutPayment.. Maybe you tried to process an ExpressCheckout that has already been processed.");
            return false;
        }*/






        /*Map<String, String> sdkConfig = new HashMap<String, String>();
        sdkConfig.put("mode", "sandbox");
        sdkConfig.put("acct1.UserName", "tolosah929_api1.gmail.com");
        sdkConfig.put("acct1.Password", "ZNKHJBXNVL9C4NXJ");
        sdkConfig.put("acct1.Signature", "AjWsTWPqZToOVKDUNiak1LHwFCOzARvVOfBKZ.xHzrhFJyig03ibDX1S");
        PayPalAPIInterfaceServiceService service = new PayPalAPIInterfaceServiceService(sdkConfig);*/

        Map<String, String> configurationMap = Configuration.getAcctAndConfig();
        PayPalAPIInterfaceServiceService service = new PayPalAPIInterfaceServiceService(configurationMap);

        // Create request object
        DoExpressCheckoutPaymentRequestType expressrequest = new DoExpressCheckoutPaymentRequestType();
        DoExpressCheckoutPaymentRequestDetailsType requestDetails = new DoExpressCheckoutPaymentRequestDetailsType();
        expressrequest.setDoExpressCheckoutPaymentRequestDetails(requestDetails);

        requestDetails.setPaymentDetails(getECResponse.getPaymentDetails());
        // (Required) The timestamped token value that was returned in the SetExpressCheckout response and passed in the GetExpressCheckoutDetails request.
        requestDetails.setToken(getECResponse.getToken());
        // (Required) Unique PayPal buyer account identification number as returned in the GetExpressCheckoutDetails response
        requestDetails.setPayerID(getECResponse.getPayerInfo().getPayerID());
        // (Required) How you want to obtain payment. It is one of the following values:
        // * Authorization – This payment is a basic authorization subject to settlement with PayPal Authorization and Capture.
        // * Order – This payment is an order authorization subject to settlement with PayPal Authorization and Capture.
        // * Sale – This is a final sale for which you are requesting payment.
        // Note: You cannot set this value to Sale in the SetExpressCheckout request and then change this value to Authorization in the DoExpressCheckoutPayment request.
        requestDetails.setPaymentAction(PaymentActionCodeType.SALE);
        // Invoke the API
        DoExpressCheckoutPaymentReq expresswrapper = new DoExpressCheckoutPaymentReq();
        expresswrapper.setDoExpressCheckoutPaymentRequest(expressrequest);
        // # API call
        // Invoke the DoExpressCheckoutPayment method in service wrapper object
        DoExpressCheckoutPaymentResponseType doECResponse = service.doExpressCheckoutPayment(expresswrapper);
        // Check for API return status

        //        if (doECResponse.getAck().equals(AckCodeType.FAILURE) ||
        //            (doECResponse.getErrors() != null && doECResponse.getErrors().Count > 0)) {
        //            return "faild";
        //        } else {
        //            TempData["TransactionResult"] = "Transaction ID:" + doECResponse.DoExpressCheckoutPaymentResponseDetails.PaymentInfo[0].TransactionID + Environment.NewLine + "Payment status" + doECResponse.DoExpressCheckoutPaymentResponseDetails.PaymentInfo[0].PaymentStatus.Value.ToString();
        //            return RedirectToAction("SaveCustomer", "SignupOrLogin");
        //        }

        System.out.println("rrr " + doECResponse.getAck() + "%%%%%%%%%%%%%%%%%%");
    }
}

