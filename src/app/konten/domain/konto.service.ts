import { Injectable } from '@angular/core';
import { Konto } from './konto';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class KontoService {

  constructor(private elektronService: ElectronService) {}

  findAll(): Konto[] {
    if (this.elektronService.isElectronApp) {
      const ipc = this.elektronService.ipcRenderer;
      return ipc.sendSync('findAllKonten');
    } else {
      console.log('Elektron nicht verfügbar');
    }
  }

  createKonto(konto: Konto): void {
    if (this.elektronService.isElectronApp) {
      const ipc = this.elektronService.ipcRenderer;
      ipc.send('createKonto', konto);
    }
  }
}
