import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-vc',
  templateUrl: './vc.component.html',
  styleUrls: ['./vc.component.css']
})
export class VcComponent implements OnInit {
  constructor (private fb: FormBuilder) {}

  ngOnInit (): void {
    /* this.valuechangeForm.valueChanges.subscribe(data => {
      console.log(data)
    }) */
    // Or Below

    this.valuechangeForm.get('firstName').valueChanges.subscribe(data => {
      console.log(data)
    })
  }

  valuechangeForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    age: [0]
  })

  register () {
    console.log(this.valuechangeForm.value)
  }
}
