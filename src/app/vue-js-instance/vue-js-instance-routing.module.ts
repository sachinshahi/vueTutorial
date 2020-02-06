import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VueJsInstanceComponent} from './vue-js-instance/vue-js-instance.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'vueJsInstance'},
  {path: 'vueJsInstance', component: VueJsInstanceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VueJsInstanceRoutingModule { }
