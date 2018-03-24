/**
* Filename: app.component.ts
* Author: lcruz@akurey.com
* Date: 03/24/2018
* Description: Main App Component
*/

import { Component } from '@angular/core';
import { BaseComponent } from './shared/components/base/base.component';

@Component({
  selector: 'ak-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {
  
  public appReady = false;
  
  baseInit(): void {
    this.appReady = true;
  }
}
