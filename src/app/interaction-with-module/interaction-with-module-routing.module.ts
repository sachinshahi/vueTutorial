import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InteractionWithModuleComponent} from './interaction-with-module/interaction-with-module.component';

const routes: Routes = [
  {path: '', component: InteractionWithModuleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionWithModuleRoutingModule { }
