package com.myapp.click.service.dto;

import com.myapp.click.domain.Payment;

public class PaymentDTO {
    private Long id;

    public PaymentDTO(){

    }

    public PaymentDTO(Payment payment) {
        this.id = payment.getId();

    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    @Override

    public String toString() {
        return "PaymentDTO{" +
            "id'" + id + '\'' +
            "}";
    }
}
