import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersubService} from "../../services/usersub.service";
import {userDTO} from "../../dto/driverDTO";
import {CookieService} from "ngx-cookie";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  userForm!: FormGroup;
  userArray!:any[];

  constructor(private usersubService: UsersubService,
              private cookieService: CookieService,
              private _snackBar: MatSnackBar) {
  }

  myControl = new FormControl();
  options: string[] = ['Admin', 'User1', 'Admin2'];

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      userrole: new FormControl('', [
        Validators.required
      ]),
      firstname: new FormControl('', [
        Validators.required
      ]),
      lastname: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  saveUser() {
    this.userArray=
    this.userForm.get('username')?.value,
      this.userForm.get('userrole')?.value,
      this.userForm.get('firstname')?.value,
      this.userForm.get('lastname')?.value,
      this.userForm.get('password')?.value
    this.cookieService.put('User', JSON.stringify(this.userArray));
    this.userForm.setValue({
      userrole : '',
      firstname: '',
      lastname: '',
      password : '',
    })
    this.openSnackBar()
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  openSnackBar() {
    this._snackBar.open('User Saved Successfully!!', 'Splash', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
