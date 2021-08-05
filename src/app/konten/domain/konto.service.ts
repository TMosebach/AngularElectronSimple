import { Injectable } from '@angular/core';
import { Konto } from './konto';
import { ElectronService } from 'ngx-electron';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KontoService {

  constructor(private elektronService: ElectronService) {}

  findAll(): Observable<Konto[]> {
    const kontorahmen = new Subject<Konto[]>();
    if (this.elektronService.isElectronApp) {
      const ipc = this.elektronService.ipcRenderer;
      ipc.on('foundKonten', (event, arg) => kontorahmen.next(arg) );

      ipc.send('findAllKonten');
    } else {
      console.log('Elektron nicht verfügbar');
    }
    return kontorahmen;
  }

  createKonto(konto: Konto): void {
    if (this.elektronService.isElectronApp) {
      const ipc = this.elektronService.ipcRenderer;
      ipc.send('createKonto', konto);
    }
  }
}
