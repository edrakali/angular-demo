import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {

  focus = false;

  form = new FormGroup({
    newTopic: new FormControl('', Validators.required),
    topics: new FormArray([]),
  });

  // Not sure why we need to use a constructor here -
  // I guess just in case we need to define stuff using code?
  // can add additional parameters I guess.
  constructor(fb: FormBuilder){
    this.form = fb.group({
      newTopic: ['', Validators.required],
      topics: fb.array([]),
    });
  }


  get newTopic(){
    return this.form.get('newTopic');
  }

  get topics(): AbstractControl[]{
    return (this.form.get('topics') as FormArray).controls;
  }

  addTopic(){
    if (this.newTopic.invalid){
      alert('New topic cannot be empty!');
      return;
    }

    console.log('Adding:', this.newTopic.value);
    this.topics.push(new FormControl(this.newTopic.value));

  }

  removeListItem(topic: FormControl){
    const index: number = this.topics.indexOf(topic);
    this.topics.splice(index, 1);
  }

}
