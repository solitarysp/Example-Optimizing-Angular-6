import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestOnPushComponent} from './OnPush/test-on-push/test-on-push.component';
import {TrackByComponent} from './track-by/track-by.component';

const routes: Routes = [
  {path: 'testOnPush', component: TestOnPushComponent},
  {path: 'trackBy', component: TrackByComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
