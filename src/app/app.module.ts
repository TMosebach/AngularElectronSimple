import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontenModule } from './konten/konten.module';
import { BuchungenModule } from './buchungen/buchungen.module';
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule ,
    AppRoutingModule,
    KontenModule,
    BuchungenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
