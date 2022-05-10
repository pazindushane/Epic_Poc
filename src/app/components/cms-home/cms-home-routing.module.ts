import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsHomeComponent } from './cms-home.component';
import {UserManagementComponent} from "./components/user-management/user-management.component";

const routes: Routes = [{ path: '', component: CmsHomeComponent},
    {path:'usermanage', component:UserManagementComponent}
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsHomeRoutingModule { }
