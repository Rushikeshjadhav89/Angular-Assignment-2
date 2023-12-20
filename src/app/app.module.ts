import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NEWmoduleModule } from './newmodule/newmodule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NEWmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
