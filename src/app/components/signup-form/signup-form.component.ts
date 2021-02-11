import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { sleep } from 'src/app/common/functions';
import { CustomValidators } from 'src/app/common/validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl(

    '', // initial value

    // normal validators
    [
      Validators.required,
      Validators.minLength(3),
      CustomValidators.ContainsNoSpace,
    ],

    // async validators
    [
      CustomValidators.UniqueUsername,
    ]),
    password: new FormControl('', Validators.required),
  });

  get username() {
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }



  async onSubmit(f){
    console.log(f.value);
    await sleep(2000); // simulate the login service
    this.form.setErrors({invalidLogin: true});
  }

  // Test stuff
  async onClick(){
    console.log('clicked');
    const value = await this.getValue();
    console.log('new value: ', value);
  }

  async getValue(){
    console.log(new Date());
    const value = await sleep(5000);
    console.log(new Date());
    return value;
  }




}
