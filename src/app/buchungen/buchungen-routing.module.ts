import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuchenComponent } from './buchen/buchen.component';
import { KontoUmsatzComponent } from './konto-umsatz/konto-umsatz.component';

const routes: Routes = [
  {
    path: 'buchungen/buchen',
    component: BuchenComponent
  },
  {
    path: 'buchungen/:id',
    component: KontoUmsatzComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuchungenRoutingModule { }
