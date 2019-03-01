import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formSubmitted = false;

  studentForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      flat: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.formSubmitted = true;
    if(this.studentForm.invalid) return;
    console.log(this.studentForm.value);
    return false;
  }

}
