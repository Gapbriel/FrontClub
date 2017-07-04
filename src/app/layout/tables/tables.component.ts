import  { Component, Injectable, OnInit } from '@angular/core';
import { SociosService } from './../../shared/services/socios.service';
import { Socio } from './../../shared/socio';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/min';
@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
   	public disciplinas: Array<any> = [];
	public tipoSocio: Array<any> = [];	
	/**
	* @type {number} numberOfBooks The number of books in the JSON file, used for max attribute for limit and page.
	*/
	numberOfSocios: number;

	/**
	* @type {number} limit The number of books per page.
	*/
	limit: number;

	/**
	* @type {number} page The current page.
	*/
	page: number = 1;

	socios : Socio[];
	  /**
   * @type {socio} filter The object containing the filter values to apply to sociofilter.
   * Could have created another entity called BookFilter, but it would basically have the same fields.
   */
  	filter: Socio = new Socio();
    constructor(private sociosService:SociosService) { 
    	this.disciplinas.push({
            id: 1,
            name: 'Fútbol'
           
        }, {
            id: 2,
            name: 'Patín'
        },{
            id: 3,
            name: 'Baile'
        },{
            id: 3,
            name: 'Karate'
        });

        this.tipoSocio.push({
            id: 1,
            name: 'Fútbol'
           
        }, {
            id: 2,
            name: 'Patín'
        },{
            id: 3,
            name: 'Baile'
        },{
            id: 3,
            name: 'Karate'
        });
    }
    ngOnInit() {
    	this.sociosService.getSocios().subscribe(
			(socios: Socio[]) => {
				this.socios = socios;
				this.numberOfSocios = this.socios.length;
				this.limit = this.socios.length; // Start off by showing all socios on a single page.
			});
    }
}
