import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AppApiService } from 'src/app/service/app-api.service';

class users{
  constructor(private email : string, private password : string){}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new users('','');
  
  constructor(private userService$ : UserService, 
              private appService$: AppApiService,
              private router : Router) { }

  ngOnInit() {

  }

  signin(){
    localStorage.setItem('loggedin','1');
    this.userService$.loggedIn.next(true);
    this.router.navigate(['/home/products']);
    // this.appService$.login(this.user).subscribe(res => {
    //   if(res.status == 400){
    //     this.userService$.showSnack(res.message);
    //   } else {
    //     this.userService$.showSnack(res.message);
    //   }
    // });
  }

  back(){
    this.router.navigate(['/']);
    // this.router.navigateByUrl('/');
  }

}
