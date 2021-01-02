import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

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
    Name: new FormControl('', Validators.required),
    Designation: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl('')
    })
  })

  onSubmit () {
    console.log('Name >>>  ' + this.employeeForm.controls['Name'].value)
    console.log('Designation >>> ' + this.employeeForm.get('Designation').value)

    console.log(this.employeeForm.value)
    console.log("Accessing from "+this.employeeForm.get('address').get('country').value)
  }
}
