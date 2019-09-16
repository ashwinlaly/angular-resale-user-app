import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Resale';
  loggedin : Boolean = false;

  constructor (private user$ : UserService, private router : Router) {

  }

  ngOnInit(){
    this.user$.loggedIn.next((localStorage.getItem('loggedin') == '1') ? true : false);
    this.user$.loggedIn.subscribe(res =>{
      this.loggedin = res;
    });
  }

  logout(){
    this.router.navigateByUrl('/signin');
    this.user$.loggedIn.next(false);
  }

}