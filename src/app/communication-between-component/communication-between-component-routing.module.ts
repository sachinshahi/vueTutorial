import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommunicationBetweenComponentComponent} from './communication-between-component/communication-between-component.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'communicationBetweenComponent'},
  {path: 'communicationBetweenComponent', component: CommunicationBetweenComponentComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationBetweenComponentRoutingModule { }
