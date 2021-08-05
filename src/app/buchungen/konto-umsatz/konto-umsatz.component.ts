import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Konto } from 'src/app/konten/domain/konto';
import { KontoService } from 'src/app/konten/domain/konto.service';
import { Buchung } from '../domain/buchung';
import { BuchungService } from '../domain/buchung.service';

@Component({
  selector: 'app-konto-umsatz',
  templateUrl: './konto-umsatz.component.html',
  styleUrls: ['./konto-umsatz.component.scss']
})
export class KontoUmsatzComponent implements OnInit {

  kontoId: string;
  konto: Konto;

  constructor(
    private route: ActivatedRoute,
    private kontoService: KontoService,
    private buchenService: BuchungService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (! id) {
        throw { msg: 'Das kann eigentlich nicht sein.'};
      }

      this.kontoId = id;
    });
  }

  buchen(buchung: Buchung): void {
    this.buchenService.buche(buchung);
    this.router.navigate(['buchungen', this.kontoId]);
  }
}
