import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  constructor (private fb: FormBuilder) {}

  ngOnInit (): void {}

  employeeForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(30)]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
      ]
    ],
    age: [
      '',
      [
        Validators.required,
        Validators.maxLength(2),
        Validators.min(10),
        Validators.max(59)
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z]).{6,10}$")
      ]
    ]
  })

  get name () {
    return this.employeeForm.get('name')
  }

  get email () {
    return this.employeeForm.get('email')
  }

  get age () {
    return this.employeeForm.get('age')
  }

  get password () {
    return this.employeeForm.get('password')
  }

  onSubmit () {
    console.log('Name >>>  ' + this.employeeForm.controls['name'].value)
    console.log('Email >>> ' + this.employeeForm.get('email').value)

    console.log('Accessing from ' + this.employeeForm.get('password').value)
  }
}
