import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from './employee';

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
      (res) => {
        this.employeeSub.next(res)
      })
  }

  addEmployee(body: any) {
    console.log(body)
    this.http.post(this.empUrl, body).subscribe(
      (res) => {
        this.employeeSub.next(res)
        this.loadEmployees()
      })
  }
  UpdateEmployee(body: any) {
    console.log(body)

    this.http.put(this.empUrl + body.employeeId, body).subscribe(
      (res) => {
        this.employeeSub.next(res)
        this.loadEmployees()
      })
  }

  deleteEmployee(body: any) {
    console.log(body)

    this.http.delete(this.empUrl + body.employeeId).subscribe(
      (res) => {
        this.employeeSub.next(res)
        this.loadEmployees()
      })
  }

  getEmployees() {
    return this.employeeSub
  }


  loadDepartments() {
    this.http.get(this.depUrl).subscribe(
      (res) => {
        this.departmenteSub.next(res)
      })
  }

  addDepartment(body: any) {
    console.log(body)

    this.http.post(this.depUrl, body).subscribe(
      (res) => {
        this.departmenteSub.next(res)
        this.loadDepartments()
      })
  }
  UpdateDepartment(body: any) {
    console.log(body)

    this.http.put(this.depUrl + body.Id, body).subscribe(
      (res) => {
        this.departmenteSub.next(res)
        this.loadDepartments()
      })
  }

  deleteDepartment(body: any) {
    console.log(body)

    this.http.delete(this.depUrl + body.Id).subscribe(
      (res) => {
        this.departmenteSub.next(res)
        this.loadDepartments()
      })
  }

  getDepartments() {
    return this.departmenteSub
  }
}
