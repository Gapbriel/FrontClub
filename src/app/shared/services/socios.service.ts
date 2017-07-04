import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Socio } from '../socio';

@Injectable() 
export class SociosService {
  constructor(private http: Http) {
  }
  
  /**
   * Load Socios from the static Socios.json data, usually an API URL.
   * 
   * @return {Observable<Socio[]>} A list of Socios.
   */
  getSocios(): Observable<Socio[]> {
    return this.http.get('assets/data/socios.json')
      .map(res => res.json().data);
  }
}