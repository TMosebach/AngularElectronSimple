import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { KontenRoutingModule } from './konten-routing.module';
import { KontenComponent } from './konten.component';
import { KontoListeComponent } from './konto-liste/konto-liste.component';
import { KontoDetailComponent } from './konto-detail/konto-detail.component';
import { KontoFormComponent } from './konto-form/konto-form.component';

@NgModule({
  declarations: [
    KontenComponent,
    KontoListeComponent,
    KontoDetailComponent,
    KontoFormComponent
  ],
  imports: [
    CommonModule,
    KontenRoutingModule,
    ReactiveFormsModule
  ]
})
export class KontenModule { }
