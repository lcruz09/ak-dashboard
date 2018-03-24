/**
* Filename: routing.module.ts
* Author: lcruz@akurey.com
* Date: 03/24/2018
* Description: App Dashboard feature module
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
