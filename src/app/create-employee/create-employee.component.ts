import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  sumbitted = false;
  constructor(private employeeService: EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.sumbitted = false;
    this.employee = new Employee();
  }

  save(){
    this.employeeService.createEmployee(this.employee).subscribe(
      data => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit(){
    this.sumbitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/employees']);
  }

}
