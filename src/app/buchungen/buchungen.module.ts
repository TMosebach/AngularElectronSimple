import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BuchungenRoutingModule } from './buchungen-routing.module';
import { KontoUmsatzComponent } from './konto-umsatz/konto-umsatz.component';
import { BuchungFormComponent } from './buchen/buchung-form/buchung-form.component';
import { BuchenComponent } from './buchen/buchen.component';

@NgModule({
  declarations: [
    KontoUmsatzComponent,
    BuchungFormComponent,
    BuchenComponent
  ],
  imports: [
    CommonModule,
    BuchungenRoutingModule,
    ReactiveFormsModule
  ]
})
export class BuchungenModule { }
