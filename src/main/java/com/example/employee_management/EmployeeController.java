package com.example.employee_management;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
	private final EmployeeService service;
	public EmployeeController(EmployeeService service) {
		this.service=service;
	}
	
	@GetMapping
	public List<Employee> getAll(){
		return service.getAll();
	}
	
	@PostMapping
	public Employee save(@RequestBody Employee emp) {
		return service.save(emp);
	}
	
	@PutMapping
	public Employee update(@RequestBody Employee emp) {
		return service.update(emp);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
	

}
