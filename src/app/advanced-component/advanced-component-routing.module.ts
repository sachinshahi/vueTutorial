import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdvancedComponentComponent} from './advanced-component/advanced-component.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'advancedComponent'},
  {path: 'advancedComponent', component: AdvancedComponentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedComponentRoutingModule { }
