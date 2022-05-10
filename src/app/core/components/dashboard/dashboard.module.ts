import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatIconModule} from "@angular/material/icon";
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavBarComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatIconModule
    ]
})
export class DashboardModule { }
