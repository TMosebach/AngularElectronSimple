import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontenModule } from './konten/konten.module';
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule ,
    AppRoutingModule,
    KontenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
