import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontenComponent } from './konten.component';
import { KontoDetailComponent } from './konto-detail/konto-detail.component';

const routes: Routes = [
  {
    path: 'konten/neu',
    component: KontoDetailComponent
  },
  {
    path: 'konten',
    component: KontenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KontenRoutingModule { }
