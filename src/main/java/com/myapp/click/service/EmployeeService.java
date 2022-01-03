package com.myapp.click.service;

import com.myapp.click.domain.Employee;
import com.myapp.click.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service

public class EmployeeService {
    private  final EmployeeRepo employeeRepo;

    @Autowired

    public EmployeeService(EmployeeRepo employeeRepo){

        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee){
        employee.setEmployee_code(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployee(){
        return employeeRepo.findAll();
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepo.save(employee);
    }
    public  Employee findEmployeeById(Long id){
        return employeeRepo.findEmployeeById(id)
            .orElseThrow(() -> new UsernameNotFoundException("user by id" + id + "was not found"));

    }
    public  void deleteEmployee(Long id){
        employeeRepo.deleteEmployeeById(id);
    }


}
