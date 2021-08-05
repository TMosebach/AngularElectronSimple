import { Injectable } from '@angular/core';
import { Buchung } from './buchung';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class BuchungService {

  constructor(private elektronService: ElectronService) { }

  buche(buchung: Buchung) {
    if (this.elektronService.isElectronApp) {
      const ipc = this.elektronService.ipcRenderer;
      ipc.send('buche', buchung);
    }
  }
}
