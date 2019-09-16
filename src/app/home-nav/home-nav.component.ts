import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})

export class HomeNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  loggedin : Boolean = false;

  constructor(private breakpointObserver : BreakpointObserver,
              private router : Router,
              private user$ : UserService ) {}

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
