import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { FiltersAndMixinsComponent } from './filters-and-mixins/filters-and-mixins/filters-and-mixins.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersAndMixinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
