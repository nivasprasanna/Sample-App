import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/employees';
  constructor(private http: HttpClient) { }

  getEmployee(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id:number, value:any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeeList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
