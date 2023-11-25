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
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z].*'),
      ]),
      password: new FormControl('', [
        Validators.required,
        // Validators.minLength(6),
      ]),
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      console.log('onSubmit succes', this.loginForm.value);
    } else {
      // Handle form errors or invalid submission
    }
  }
}
