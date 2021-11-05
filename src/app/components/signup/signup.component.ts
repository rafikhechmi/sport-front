import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.signupForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      pwd:[''],
      confirmPwd:['']
    });
  }

  signup(){
    console.log(this.signupForm.value);
  }

}
