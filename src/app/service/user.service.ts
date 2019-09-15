import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loggedIn = new BehaviorSubject(false);

  constructor(private _snackBar : MatSnackBar) { }

  showSnack(message : string){
    this._snackBar.open(`${message}`,'Close',{
      duration : 2000
    });
  }

}
