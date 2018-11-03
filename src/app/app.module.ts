import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'volejbal-sokol-benesov-v2'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
