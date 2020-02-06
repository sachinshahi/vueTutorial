import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionalAndRenderingListRoutingModule } from './conditional-and-rendering-list-routing.module';
import {ConditionalAndRenderingListComponent} from './conditional-and-rendering-list/conditional-and-rendering-list.component';
import {LayoutModule} from '../layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {PipeModule} from '../pipe/pipe.module';

@NgModule({
  declarations: [
    ConditionalAndRenderingListComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    ConditionalAndRenderingListRoutingModule,
    PipeModule
  ]
})
export class ConditionalAndRenderingListModule { }
