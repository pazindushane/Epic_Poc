import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  currentYear!:number;
  cookieValues :any


  constructor(private router: Router,
              private cookieService: CookieService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cookieValues = JSON.parse(this.cookieService.get('User'));
    this.currentYear  = new Date().getFullYear();
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  LoginUser(){
    console.log(this.cookieValues)
    if (this.cookieValues[0] == this.loginForm.get('password')?.value){
      this.router.navigate(['/dashboard']);
    }else{
      this.openSnackBar()
    }
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  openSnackBar() {
    this._snackBar.open('Invalid Credentials!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
