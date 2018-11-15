import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {OnPushModule} from './OnPush/on-push.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnPushModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
