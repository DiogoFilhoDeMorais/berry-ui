import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserInterface } from 'src/app/shared/user.interface';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z].*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  submitForm() {
    if (this.loginForm.valid) {
      // Perform actions when the form is valid
    } else {
      // Handle form errors or invalid submission
    }
  }
}
