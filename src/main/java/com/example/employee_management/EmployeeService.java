package com.example.employee_management;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
	private final EmployeeRepository repo;
	
	public EmployeeService(EmployeeRepository repo) {
		this.repo = repo;
	}
	
	public List<Employee> getAll(){
		return repo.findAll();
	}
	
	public Employee save(Employee emp) {
		return repo.save(emp);
	}
	
	public void delete(Long id) {
		repo.deleteById(id);
	}
	
	public Employee update(Employee emp) {
		return repo.save(emp);
	}
}
