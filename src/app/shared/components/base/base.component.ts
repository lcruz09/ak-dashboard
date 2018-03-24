/**
* Filename: carely.component.ts
* Author: lcruz@akurey.com
* Date: 02/13/2018
* Description: Abstract Carely Component
*/

import { Component, Injector, OnInit, Injectable} from '@angular/core';
import { Router } from '@angular/router';

import { LanguageService } from './../../services/language.service';

@Injectable()
export abstract class BaseComponent {

  public sectionWording: any;
  public wording: any;
  public languageService: LanguageService;
  public router: Router;

  constructor(
    private injector: Injector
  ) {
    this.languageService = injector.get(LanguageService);
    this.router = injector.get(Router);
    this.loadWording();
  }

  /**
   * Loads the wording to be used on app
   */
  private loadWording(): void {
    const operation = this.languageService.getWording();
    operation.subscribe(
      result => {
        this.wording = result.value;
        // Execute abstract method
        this.baseInit();
      }
    );
  }

  abstract baseInit(): void;

}
