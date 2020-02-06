import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConditionalAndRenderingListComponent} from './conditional-and-rendering-list/conditional-and-rendering-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'conditionalAndRenderingList'},
  {path: 'conditionalAndRenderingList', component: ConditionalAndRenderingListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConditionalAndRenderingListRoutingModule { }
