import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  empUrl = "https://localhost:7049/api/Employees/"
  depUrl = "https://localhost:7049/api/Departments/"

  private employeeSub = new Subject()
  private departmenteSub = new Subject()
  constructor(private http: HttpClient) {
    this.loadEmployees()
    this.loadDepartments()
  }


  loadEmployees() {
    this.http.get(this.empUrl).subscribe(
      (res) => this.employeeSub.next(res)
    )
  }

  addEmployee(body: any) {
    console.log(body)
    this.http.post(this.empUrl, body)
  }
  UpdateEmployee(body: any) {
    this.http.put(this.empUrl + body.EmployeeId, body)
  }

  deleteEmployee(body: any) {
    this.http.delete(this.empUrl + body.EmployeeId)
  }

  getEmployees() {
    return this.employeeSub
  }

  
  loadDepartments() {
    this.http.get(this.depUrl).subscribe(
      (res) => this.departmenteSub.next(res)
    )
  }

  addDepartment(body: any) {
    this.http.post(this.depUrl, body)
  }
  UpdateDepartment(body: any) {
    this.http.put(this.depUrl + body.Id, body)
  }

  deleteDepartment(body: any) {
    this.http.delete(this.depUrl + body.Id)
  }

  getDepartments() {
    return this.departmenteSub
  }
}
