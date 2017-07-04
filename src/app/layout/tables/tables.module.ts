import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { PageHeaderModule } from './../../shared';
import { SociosService } from './../../shared/services/socios.service'

@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule,
        FormsModule,
		HttpModule,
        PageHeaderModule
    ],
    declarations: [TablesComponent],
    providers: [
    	SociosService,
  	]
})
export class TablesModule { }
