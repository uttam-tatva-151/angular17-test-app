import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TsInputComponent, TsInputConfig, TsInputType } from 'ts-components/form-controls/input';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TsCheckboxComponent, TsCheckboxConfig } from 'ts-components/form-controls/checkbox';
import { TsButtonConfig, TsButtonComponent } from 'ts-components/form-controls/button';

@Component({
  selector: 'test-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TsInputComponent, TsCheckboxComponent, TsButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent{
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userName: [''],
      password: [''],
      rememberMe: [false]
    });
  }

  textInputUserNameConfig: TsInputConfig = {
    type: TsInputType.Text,
    formControlName: 'userName',
    label: 'UserName'
  }
  textInputPasswordConfig: TsInputConfig = {
    type: TsInputType.Password,
    formControlName: 'password',
    label: 'Password'
  }
  rememberMeCheckboxConfig: TsCheckboxConfig = {
    formControlName: 'rememberMe',
    label: 'Remember Me'
  }
  loginButtonConfig: TsButtonConfig  ={
    buttonText: 'Login',
    color: 'primary',
    id: '',
    isPrimary: true,
    cssClasses: [
      'w-100',
      'mt-4',
      'py-2',
      'bg-primary',
      'text-white',
      'font-semibold',
      'rounded-lg',
    ],
    variant: 'bordered',
    callback: function (element?: any): void {
      throw new Error('Function not implemented.');
    }
  }
}
