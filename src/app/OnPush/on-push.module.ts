import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MySelectComponent} from './my-select/my-select.component';
import {TestOnPushComponent} from './test-on-push/test-on-push.component';

@NgModule({
  declarations: [MySelectComponent, TestOnPushComponent],
  imports: [
    CommonModule
  ]
})
export class OnPushModule {
}
