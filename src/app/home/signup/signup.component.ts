import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validator ,FormGroup, FormControl, Validators } from '@angular/forms';
import { AppApiService } from 'src/app/service/app-api.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // SignIn = this.fb.group({
  //   name : ['', [Validators.required, Validators.minLength(5)]],
  //   email : [''],
  //   password : [''],
  //   mobile : ['']
  // });
  
  // SignIn = new FormGroup({
  //   name  : new FormControl('', [Validators.required, Validators.minLength(4)]),
  //   email : new FormControl(''),
  //   password : new FormControl(''),
  //   mobile : new FormControl(''),
  // });

  SignIn : FormGroup;
  name : FormControl;
  email : FormControl;
  password : FormControl;
  mobile : FormControl;

  constructor(private router : Router,
              private App$ : AppApiService,
              private user$ : UserService,
              private fb : FormBuilder) {   
  }

  ngOnInit() {

    this.name =  new FormControl('', [Validators.required, Validators.minLength(4)]),
    this.email = new FormControl('', [Validators.required, Validators.minLength(5)]),
    this.password = new FormControl('', [Validators.required, Validators.minLength(5)]),
    this.mobile = new FormControl('', [Validators.required, Validators.minLength(5)]),

    this.SignIn = new FormGroup({
      name  : this.name,
      email : this.email,
      password : this.password,
      mobile : this.mobile
    });

    this.user$.loggedIn.subscribe(val => {
      console.log(val);
    })

  }

  back() {
    this.router.navigate(['/']);
  }

  create() {
    this.App$.signup('').subscribe(res => {
      if(res.status == 200) {
        this.user$.showSnack(res.message);
      } else {
        this.user$.showSnack(res.message);
      }
    });
  }

}
