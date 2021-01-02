import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-fa',
  templateUrl: './fa.component.html',
  styleUrls: ['./fa.component.css']
})
export class FaComponent implements OnInit {
  constructor (private fb: FormBuilder) {}

  ngOnInit (): void {}

  personForm = this.fb.group({
    firstName: [''],
    phones: this.fb.array([])
  })

  get phoneForms () {
    return this.personForm.get('phones') as FormArray
  }

  addPhone () {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    })
    this.phoneForms.push(phone)
  }

  deletePhone (i) {
    this.phoneForms.removeAt(i)
  }

  removeAllPhoneDetails(){
    this.phoneForms.clear()
  }
}
