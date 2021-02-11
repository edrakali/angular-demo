import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/common/validators';

@Component({
  selector: 'change-pw',
  templateUrl: './change-pw.component.html',
  styleUrls: ['./change-pw.component.css']
})
export class ChangePwComponent implements OnInit {

  loading = false;

  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, CustomValidators.oldPasswordShouldMatch),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, CustomValidators.passwordsShouldMatch);

  get oldPassword(){
    return this.form.get('oldPassword');
  }

  get newPassword(){
    return this.form.get('newPassword');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f){
    this.loading = true;
    console.log('Submitted', f.value);
  }

}
