import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Leaf1Component } from './leaf1/leaf1.component';
import { Leaf2Component } from './leaf2/leaf2.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Leaf1Component,
    Leaf2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
