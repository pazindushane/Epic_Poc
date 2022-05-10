import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsHomeRoutingModule } from './cms-home-routing.module';
import { CmsHomeComponent } from './cms-home.component';
import { CmsHomeSubComponent } from './components/cms-home-sub/cms-home-sub.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {UserManagementComponent} from "./components/user-management/user-management.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [
    CmsHomeComponent,
    CmsHomeSubComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    CmsHomeRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class CmsHomeModule { }
