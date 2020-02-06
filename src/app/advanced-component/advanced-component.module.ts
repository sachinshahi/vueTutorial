import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedComponentRoutingModule } from './advanced-component-routing.module';
import {AdvancedComponentComponent} from './advanced-component/advanced-component.component';
import {LayoutModule} from '../layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {PipeModule} from '../pipe/pipe.module';

@NgModule({
  declarations: [AdvancedComponentComponent],
  imports: [
    CommonModule,
    LayoutModule,
    HttpClientModule,
    PipeModule,
    AdvancedComponentRoutingModule
  ]
})
export class AdvancedComponentModule { }
