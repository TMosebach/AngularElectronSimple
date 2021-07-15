import { Injectable } from '@angular/core';
import { Konto } from './konto';

@Injectable({
  providedIn: 'root'
})
export class KontoService {

  app: any;

  constructor() {
    if (electron) {
      this.app = electron.remote.app;
    } else {
      this.app = {
        konten: [],
        findAllKonten: () => this.app.konten,
        createKonto: (konto: Konto) => this.app.konten.push(konto)
      };
    }

  }

  findAll(): Konto[] {
    return this.app.findAllKonten();
  }

  createKonto(konto: Konto): void {
    this.app.createKonto(konto);
  }
}
