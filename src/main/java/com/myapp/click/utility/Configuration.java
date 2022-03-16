package com.myapp.click.utility;

import java.util.HashMap;
import java.util.Map;

public class Configuration {
    // create a configuration map containing credentials and other required configuration

    public static final Map<String, String> getAcctAndConfig(){
        Map<String, String> configMap = new HashMap<String, String>();
        configMap.putAll(getConfig());

        //account credentials
        configMap.put("acct1.UserName","getwap10_api1.gmail.com");
        configMap.put("acct1.Password","BBBFDSZ2B77DKLXL");
        configMap.put("acct1.Signature", "ALdlSsI7zcv-G96fkm7-hNNpdHWMA0f03MhOSXdPQlHekhxO1HURzJRN");

        return configMap;
    }

    public static final Map<String, String> getConfig(){
        Map<String, String> configMap = new HashMap<String, String>();

        configMap.put("mode","sandbox");

        return configMap;
    }
}


