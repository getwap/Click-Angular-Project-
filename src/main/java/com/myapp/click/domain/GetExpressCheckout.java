package com.myapp.click.domain;

import com.myapp.click.utility.Configuration;
import com.paypal.exception.*;
import com.paypal.sdk.exceptions.PayPalException;
import org.xml.sax.SAXException;
import urn.ebay.api.PayPalAPI.GetExpressCheckoutDetailsReq;
import urn.ebay.api.PayPalAPI.GetExpressCheckoutDetailsRequestType;
import urn.ebay.api.PayPalAPI.GetExpressCheckoutDetailsResponseType;
import urn.ebay.api.PayPalAPI.PayPalAPIInterfaceServiceService;
import urn.ebay.apis.eBLBaseComponents.GetExpressCheckoutDetailsResponseDetailsType;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.util.Map;

public class GetExpressCheckout {
    public GetExpressCheckoutDetailsResponseDetailsType getExpressCheckoutDetails(String token) throws PayPalException, ClientActionRequiredException, SSLConfigurationException, MissingCredentialException, InvalidResponseDataException, InvalidCredentialException, IOException, ParserConfigurationException, HttpErrorException, InterruptedException, SAXException {

        Map<String, String> configurationMap = Configuration.getAcctAndConfig();
        PayPalAPIInterfaceServiceService service = new PayPalAPIInterfaceServiceService(configurationMap);

        GetExpressCheckoutDetailsReq getECWrapper = new GetExpressCheckoutDetailsReq();

        getECWrapper.setGetExpressCheckoutDetailsRequest(new GetExpressCheckoutDetailsRequestType(token));
        GetExpressCheckoutDetailsResponseType getECResponse = service.getExpressCheckoutDetails(getECWrapper);
        getECResponse.getGetExpressCheckoutDetailsResponseDetails();


        System.out.println("B  " + getECResponse.getGetExpressCheckoutDetailsResponseDetails().getToken() + " token ###########");
        System.out.println(
            "********  " + getECResponse.getGetExpressCheckoutDetailsResponseDetails().getPaymentDetails() + " payment detail ###########"
        );
        System.out.println(
            "********  " + getECResponse.getGetExpressCheckoutDetailsResponseDetails().getPayerInfo() + " payer info ###########"
        );
        System.out.println(
            "********  " + getECResponse.getGetExpressCheckoutDetailsResponseDetails().getBillingAddress() + " addr ###########"
        );
        System.out.println(
            "********  " + getECResponse.getGetExpressCheckoutDetailsResponseDetails().getCheckoutStatus() + " status ###########"
        );

        return getECResponse.getGetExpressCheckoutDetailsResponseDetails();
        }
    }

