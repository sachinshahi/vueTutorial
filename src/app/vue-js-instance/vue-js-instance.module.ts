import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VueJsInstanceRoutingModule } from './vue-js-instance-routing.module';
import {VueJsInstanceComponent} from './vue-js-instance/vue-js-instance.component';
import {LayoutModule} from '../layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {ConditionalAndRenderingListRoutingModule} from '../conditional-and-rendering-list/conditional-and-rendering-list-routing.module';
import {PipeModule} from '../pipe/pipe.module';

@NgModule({
  declarations: [VueJsInstanceComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    PipeModule,
    VueJsInstanceRoutingModule
  ]
})
export class VueJsInstanceModule { }
