package com.myapp.click.domain;

import javax.persistence.*;
import java.io.Serializable;
//@Entity //used to map the class in to the database
//@Table
//public class Employee implements Serializable {
//    @Id
////    @GeneratedValue(strategy = GenerationType.AUTO)
////    @Column(nullable = false, updatable = false)
//    @SequenceGenerator(
//        name = "employee_sequence",
//        sequenceName = "employee_sequence",
//        allocationSize = 1
//    )
//    @GeneratedValue(
//        strategy = GenerationType.SEQUENCE,
//        generator = "employee_sequence"
//    )
@Entity
@Table(name = "employee")
public class Employee extends AbstractAuditingEntity implements Serializable {

    private static final long serialVersionUID = 2L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;
    private String name;
    private String email;
    private String job_title;
    private String phone;
    private String imageUrl;
    @Column(nullable = false, updatable = false)
    private String employee_code;


    public Employee(){}

    public Employee(String name, String email, String job_title,String phone,String imageUrl, String employee_code){
        this.name = name;
        this.email= email;
        this.job_title = job_title;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.employee_code = employee_code;
    }

    public Long getId(){
        return id;
    }

    public void  setId(Long id){
        this.id = id;
    }
    public String getName(){
        return name;

    }
    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJob_title() {
        return job_title;
    }

    public void setJob_title(String job_title) {
        this.job_title = job_title;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getEmployee_code() {
        return employee_code;
    }

    public void setEmployee_code(String employee_code) {
        this.employee_code = employee_code;
    }

    @Override
    public String toString(){
        return "Employee{" +
            "id=" + id +
            ", name='" +name + '\'' +
            ", email='" +email+'\''+
            ", job_title='" + job_title+'\''+
            ", phone='" + phone+'\''+
            ", imageUrl='" + imageUrl+'\''+
            '}';



    }
}

















