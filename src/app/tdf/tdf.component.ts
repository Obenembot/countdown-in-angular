import { Component, OnInit } from '@angular/core'
import { Emp } from '../emp'

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {}

  id = 101
  skills = ['Java', 'QSL', 'C++', 'Python']
  model = new Emp(++this.id, 'John', 'Project Mange', this.skills[0])
  submitted = false

  get dignose () {
    return JSON.stringify(this.model)
  }

  onSubmit () {
    this.submitted = true
    this.model = new Emp(++this.id, this.model.name, this.model.designation, this.skills[0])

    console.log(this.model)
  }
}
