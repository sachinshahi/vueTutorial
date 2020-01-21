import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InteractionWithModuleRoutingModule} from './interaction-with-module-routing.module';
import {InteractionWithModuleComponent} from './interaction-with-module/interaction-with-module.component';
import {LayoutModule} from '../layout/layout.module';
import {PipeModule} from '../pipe/pipe.module';

@NgModule({
  declarations: [InteractionWithModuleComponent],
  imports: [
    CommonModule,
    InteractionWithModuleRoutingModule,
    LayoutModule,
    PipeModule
  ],
  exports: [InteractionWithModuleComponent]
})
export class InteractionWithModuleModule { }
