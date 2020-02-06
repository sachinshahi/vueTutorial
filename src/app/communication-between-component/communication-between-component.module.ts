import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationBetweenComponentRoutingModule } from './communication-between-component-routing.module';
import {CommunicationBetweenComponentComponent} from './communication-between-component/communication-between-component.component';
import {LayoutModule} from '../layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {PipeModule} from '../pipe/pipe.module';

@NgModule({
  declarations: [CommunicationBetweenComponentComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    PipeModule,
    CommunicationBetweenComponentRoutingModule
  ]
})
export class CommunicationBetweenComponentModule { }
