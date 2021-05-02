import { Component } from '@angular/core';
import { EmployeeServiceService } from './employeeService/employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private employeeData: EmployeeServiceService){}
  title = 'my-portal';
  public openSearchSlider = false;
  public valueHolder = {};
  public star = [1, 2, 3, 4, 5];
  public employeesList = this.employeeData.provideEmployeeData();
  public filteredEmployeeList = this.employeesList;
  public tempArr = this.filteredEmployeeList;
  public departments = this.employeeData.provideEmployeeDepartment();
  public roleType = this.employeeData.provideEmployeeRole();
  public position = this.employeeData.provideEmployeeDesignation();
  public experience = this.employeeData.provideEmployeeExperience();
  public yearOfJoining = this.employeeData.provideEmployeeYearOfJoining();
  public locations = this.employeeData.provideEmployeeLocation();
  public teams = this.employeeData.provideEmployeeTeam();
  openSearchSliderfunc() {
    this.openSearchSlider = true;
  }
  hideSearchSlider(){
    this.openSearchSlider = false;
    this.filteredEmployeeList = this.employeesList;
  }
  onclickSubmit(formValue) {
    this.filteredEmployeeList = this.employeesList;
    this.filteredEmployeeList = this.employeesList.filter(function(el) {
      return (el.department == formValue.department || formValue.department == '' || formValue.department == null) &&
      (el.role == formValue.role || formValue.role == '' || formValue.role == null) &&
      (el.designation == formValue.designation || formValue.designation == '' || formValue.designation == null) &&
      (el.experience == formValue.experience || formValue.experience == '' || formValue.experience == null) &&
      (el.dateOfJoining == formValue.year || formValue.year == '' || formValue.year == null) &&
      (el.team.includes(formValue.location) || formValue.location == '' || formValue.location == null) &&
      (el.team == formValue.team  || formValue.team == '' || formValue.team == null);
    });
    this.tempArr = this.filteredEmployeeList;
  }
  filterOnLocation(e){
    if (e.target.checked) {
      this.filteredEmployeeList = this.filteredEmployeeList.filter(function(el) {
        return (el.team.includes('Bangalore'));
      });
    } else {
      this.filteredEmployeeList = this.tempArr;
    }
  }
  teamFilter(e){
    // this.tempArr = this.filteredEmployeeList;
    this.filteredEmployeeList = this.tempArr;
    if (e.target.value !== '') {
      this.filteredEmployeeList = this.filteredEmployeeList.filter(function(el){
        return (el.team == e.target.value);
      });
    } else {
      this.filteredEmployeeList = this.tempArr;
    }
  }
  resetFunc() {
    this.filteredEmployeeList = this.employeesList;
  }
}
