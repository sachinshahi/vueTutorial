import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GettingStartedModule} from './getting-started/getting-started.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'gettingStarted'},
  {
    path: 'gettingStarted', loadChildren: () => import('./getting-started/getting-started.module').then(m => {
      return m.GettingStartedModule;
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
