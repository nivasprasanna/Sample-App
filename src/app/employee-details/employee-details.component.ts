import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;
  constructor(private employeeService: EmployeeService,private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(
      data => {
        console.log(data);
        this.employee = data;
      },error => console.log(error));
  }

  list(){
      this.router.navigate(['employees']);
  }

}
