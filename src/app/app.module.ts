import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesData } from './employeeData/employees-data';
import { EmployeeServiceService } from './employeeService/employee-service.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [EmployeesData, EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
