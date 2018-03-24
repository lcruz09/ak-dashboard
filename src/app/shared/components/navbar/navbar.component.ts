/**
* Filename: navbar.component.ts
* Author: lcruz@akurey.com
* Date: 03/24/2018
* Description: Main Navbar component
*/

import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'ak-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends BaseComponent implements OnInit {
  
  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
  }

  baseInit(): void {
    this.sectionWording = this.wording.navbar;
  }

}
