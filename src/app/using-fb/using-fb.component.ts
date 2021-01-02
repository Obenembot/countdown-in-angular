import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'

@Component({
  selector: 'app-using-fb',
  templateUrl: './using-fb.component.html',
  styleUrls: ['./using-fb.component.css']
})
export class UsingFBComponent implements OnInit {
  constructor (private fb: FormBuilder) {}

  ngOnInit (): void {}

  userProfileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    phone: [, Validators.required],
    addresses: this.fb.group({
      address1: ['',Validators.required],
      address2: [''],
      state: [''],
      zip: ['']
    })
  })

  onSubmit () {
    console.warn(this.userProfileForm.value)
    var firstName = this.userProfileForm.controls['firstName'].value
    var lastName = this.userProfileForm.get('lastName').value
    console.log("First Name is "+firstName+" : Last Name is "+lastName)

    console.log("Accessing Address")
    console.log('Accessing Address >>>> using [ , ] >>' + this.userProfileForm.get(['addresses','address1']).value)
    console.log('Accessing Address >>>> using get().get() >>' + this.userProfileForm.get('addresses').get('address2').value)

  }
}
