import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestOnPushComponent} from './test-on-push/test-on-push.component';

const routes: Routes = [
  {path: 'testOnPush', component: TestOnPushComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OnPushRoutingModule { }
