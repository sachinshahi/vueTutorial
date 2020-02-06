import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentIntroductionRoutingModule} from './component-introduction-routing.module';
import {LayoutModule} from '../layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {PipeModule} from '../pipe/pipe.module';
import {ComponentIntroductionComponent} from './component-introduction/component-introduction.component';

@NgModule({
  declarations: [ComponentIntroductionComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    PipeModule,
    ComponentIntroductionRoutingModule
  ]
})
export class ComponentIntroductionModule { }
