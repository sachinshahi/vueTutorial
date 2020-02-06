import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponentIntroductionComponent} from './component-introduction/component-introduction.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'componentIntroduction'},
  {path: 'componentIntroduction', component: ComponentIntroductionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentIntroductionRoutingModule { }
