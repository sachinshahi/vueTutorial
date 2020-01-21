import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'interactionWithModule'},
  {
    path: 'gettingStarted', loadChildren: () => import('./getting-started/getting-started.module').then(m => {
      return m.GettingStartedModule;
    })
  },
  {
    path: 'interactionWithModule', loadChildren: () => import('./interaction-with-module/interaction-with-module.module').then(m => {
      return m.InteractionWithModuleModule;
    })
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
