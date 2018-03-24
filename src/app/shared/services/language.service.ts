/**
* Filename: language.service.ts
* Author: lcruz@akurey.com
* Date: 03/24/2018
* Description: Handles the language wording depending on selection
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LanguageService {

  public currentLanguage = 'en';
  public wording: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Gets the json wording file to be used on page
   * @return {Observable<any>} An observable with the wording data to be used
   */
  public getWording(): Observable<any> {
    if (!this.wording) {
      // Get the language from json file
      return this.httpClient.get<any>(`assets/languages/${this.currentLanguage}.json`)
      .map((res: any) => {
        this.wording = res;
        return Observable.of<any>(this.wording);
      });
    } else {
      return Observable.of<any>({value: this.wording});
    }
  }
}
