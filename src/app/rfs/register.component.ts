import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-rfs',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {}

  skills = ['Java', 'QSL', 'C++', 'Python']
  
  EmployeeName = new FormControl('')

  updateEmployeeName () {
    this.EmployeeName.setValue('John')
  }

  employeeForm = new FormGroup({
    Name: new FormControl(''),
    Designation: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl('')
  
  })

  onSubmit () {
   
    console.log(this.employeeForm.value)
  }
}
