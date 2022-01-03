package com.myapp.click.service.exception;

import org.mapstruct.control.MappingControl;

public class UsernameNotFoundException extends RuntimeException {
    public UsernameNotFoundException (String message){
        super(message);
    }
}


