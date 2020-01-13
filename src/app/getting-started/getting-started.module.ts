import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GettingStartedRoutingModule} from './getting-started-routing.module';
import {GettingStartedComponent} from './getting-started/getting-started.component';
import {LayoutModule} from '../layout/layout.module';

@NgModule({
  declarations: [GettingStartedComponent],
  imports: [
    CommonModule,
    GettingStartedRoutingModule,
    LayoutModule
  ],
  exports: [GettingStartedComponent]
})
export class GettingStartedModule {
}
