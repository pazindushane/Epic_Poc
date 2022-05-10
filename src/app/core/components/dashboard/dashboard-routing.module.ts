import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {CmsHomeComponent} from "../../../components/cms-home/cms-home.component";

const routes: Routes = [{ path: '', component:DashboardComponent, children:[
    {path:'', redirectTo:'cmsHome', pathMatch:'full'},
    { path: 'cmsHome', loadChildren: () => import('../../../components/cms-home/cms-home.module').then(m => m.CmsHomeModule) }
  ] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
