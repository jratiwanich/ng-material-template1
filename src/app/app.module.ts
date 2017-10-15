import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatChipsModule,MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  //exports:[MatChipsModule,MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
