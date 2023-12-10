import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataStorageService } from 'src/app/core/dataService.service';
import { UserInterface } from 'src/app/shared/user.interface';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  private users: UserInterface[] = [];

  constructor(
    private dataStorageService: DataStorageService,
    private matDialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.dataStorageService.getUsers().subscribe((userAPI) => {
      this.users = userAPI.users;
    });

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
