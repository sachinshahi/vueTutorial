import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RealDevelopmentWorkFlowRoutingModule} from './real-development-work-flow-routing.module';
import {RealDevelopmentWorkFlowComponent} from './real-development-work-flow/real-development-work-flow.component';
import {LayoutModule} from '../layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {PipeModule} from '../pipe/pipe.module';

@NgModule({
  declarations: [RealDevelopmentWorkFlowComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    PipeModule,
    RealDevelopmentWorkFlowRoutingModule
  ]
})
export class RealDevelopmentWorkFlowModule { }
