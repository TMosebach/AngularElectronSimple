import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buchung } from '../domain/buchung';
import { BuchungService } from '../domain/buchung.service';

@Component({
  selector: 'app-buchen',
  templateUrl: './buchen.component.html',
  styleUrls: ['./buchen.component.scss']
})
export class BuchenComponent implements OnInit {

  constructor(
    private buchenService: BuchungService,
    private router: Router) { }

  ngOnInit(): void {
  }

  buchen(buchung: Buchung): void {
    this.buchenService.buche(buchung);
    this.router.navigate(['']);
  }
}
