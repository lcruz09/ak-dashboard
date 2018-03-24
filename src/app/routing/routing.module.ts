/**
* Filename: routing.module.ts
* Author: lcruz@akurey.com
* Date: 03/24/2018
* Description: Main routing module
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingConstants } from '../shared/utils/routing-constants.enum';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: `/${RoutingConstants.DASHBOARD}`, pathMatch: 'full' },
  { path: RoutingConstants.DASHBOARD, component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
