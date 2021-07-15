import { Component, OnInit } from '@angular/core';
import { Konto } from '../domain/konto';
import { KontoService } from '../domain/konto.service';

@Component({
  selector: 'app-konto-liste',
  templateUrl: './konto-liste.component.html',
  styleUrls: ['./konto-liste.component.scss']
})
export class KontoListeComponent implements OnInit {

  konten: Konto[];

  constructor(private kontoService: KontoService) { }

  ngOnInit(): void {
    this.konten = this.kontoService.findAll();
  }
}
