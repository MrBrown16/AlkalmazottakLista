import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  newEmployee= new Employee();
  empList:any
  depList:any
  columns:any=[
    {key:"employeeId", id:1, text:"Id", type:"plain"},
    {key:"employeeName", id:2, text:"Name", type:"text"},
    {key:"departmentid", id:3, text:"Department", type:"selection"},
  ]

  constructor(private base:BaseService){
    this.base.getEmployees().subscribe(
      (res)=> this.empList=res
    )
    this.base.getDepartments().subscribe(
      (res)=>this.depList=res
    )
  }

  addEmployee(){
    console.log(this.newEmployee)
    this.base.addEmployee(this.newEmployee)
  }

  updateEmployee(body:any){
    this.base.UpdateEmployee(body)
  }
  terminateEmployee(body:any){
    this.base.deleteEmployee(body)
  }


}
