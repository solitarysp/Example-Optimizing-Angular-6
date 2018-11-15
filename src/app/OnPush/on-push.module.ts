import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MySelectComponent} from './my-select/my-select.component';
import {TestOnPushComponent} from './test-on-push/test-on-push.component';
import {OnPushRoutingModule} from './on-push-routing.module';

@NgModule({
  declarations: [MySelectComponent, TestOnPushComponent],
  imports: [
    CommonModule, OnPushRoutingModule
  ]
})
export class OnPushModule {
}
