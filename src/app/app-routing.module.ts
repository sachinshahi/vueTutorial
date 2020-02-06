import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'communicationBetweenComponent'},
  {
    path: 'gettingStarted', loadChildren: () => import('./getting-started/getting-started.module').then(m => {
      return m.GettingStartedModule;
    })
  },
  {
    path: 'interactionWithModule', loadChildren: () => import('./interaction-with-module/interaction-with-module.module').then(m => {
      return m.InteractionWithModuleModule;
    })
  },
  {
    path: 'conditionalAndRendering', loadChildren: () => import('./conditional-and-rendering-list/conditional-and-rendering-list.module').then(m => {
       return m.ConditionalAndRenderingListModule;
    })
  },
  {

    path: 'vuejsInstance', loadChildren: () => import('./vue-js-instance/vue-js-instance.module').then(m => {
      return m.VueJsInstanceModule;
    })
  },
  {
    path: 'componentIntroduction', loadChildren: () => import('./component-introduction/component-introduction.module').then(m => {
      return m.ComponentIntroductionModule;
    })
  },
  {
    path: 'communicationBetweenComponent', loadChildren: () => import('./communication-between-component/communication-between-component.module').then(m => {
      return m.CommunicationBetweenComponentModule;
    })
  },
  {
    path: 'advancedComponent', loadChildren: () => import('./advanced-component/advanced-component.module').then(m => {
      return m.AdvancedComponentModule;
    })
  },
  {
    path: 'realDevelopmentWorkFlow', loadChildren: () => import('./real-development-work-flow/real-development-work-flow.module').then(m => {
      return m.RealDevelopmentWorkFlowModule;
    })
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
