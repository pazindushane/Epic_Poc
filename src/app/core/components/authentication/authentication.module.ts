import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './components/login/login.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent
  ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export class AuthenticationModule { }
