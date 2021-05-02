import { Injectable } from '@angular/core';
import { EmployeesData } from '../employeeData/employees-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private employeeData: EmployeesData) { }
  
  provideEmployeeData() {
    return this.employeeData.employeeList;
  }
  provideEmployeeDepartment(){
    return this.employeeData.department;
  }
  provideEmployeeRole(){
    return this.employeeData.role;
  }
  provideEmployeeDesignation(){
    return this.employeeData.position;
  }
  provideEmployeeExperience(){
    return this.employeeData.experience;
  }
  provideEmployeeYearOfJoining(){
    return this.employeeData.yearOfJoining;
  }
  provideEmployeeLocation(){
    return this.employeeData.location;
  }
  provideEmployeeTeam(){
    return this.employeeData.team;
  }
}
