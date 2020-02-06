import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RealDevelopmentWorkFlowComponent} from './real-development-work-flow/real-development-work-flow.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'realDevelopmentWorkFlow'},
  {path: 'realDevelopmentWorkFlow', component: RealDevelopmentWorkFlowComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealDevelopmentWorkFlowRoutingModule { }

