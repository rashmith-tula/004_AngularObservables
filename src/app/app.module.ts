import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { ContentComponent } from './content/content.component';
import { controller } from './control.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [controller],
  bootstrap: [AppComponent]
})
export class AppModule { }
