import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Konto } from '../domain/konto';
import { KontoService } from '../domain/konto.service';

@Component({
  selector: 'app-konto-detail',
  templateUrl: './konto-detail.component.html',
  styleUrls: ['./konto-detail.component.scss']
})
export class KontoDetailComponent implements OnInit {

  constructor(
    private kontoService: KontoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  doSpeichern(konto: Konto): void {
    this.kontoService.createKonto(konto);
    this.router.navigate(['konten']);
  }
}
