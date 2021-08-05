import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Konto } from 'src/app/konten/domain/konto';
import { Buchung } from '../../domain/buchung';
import { KontoRef } from '../../domain/konto-ref';
import { Umsatz } from '../../domain/umsatz';

@Component({
  selector: 'app-buchung-form',
  templateUrl: './buchung-form.component.html',
  styleUrls: ['./buchung-form.component.scss']
})
export class BuchungFormComponent implements OnInit {

  @Output() buchen = new EventEmitter<Buchung>();

  buchungForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buchungForm = this.fb.group({
      type: ['Buchung'],
      verwendung: [],
      empfaenger: [''],
      buchungen: this.fb.array([])
    });
    this.addBuchung();
  }

  get buchungen(): FormArray {
    return this.buchungForm.get('buchungen') as FormArray;
  }

  removeBuchung(i: number): void {
    this.buchungen.removeAt(i);
  }

  addBuchung(): void {
    this.buchungen.push(
      this.fb.group({
        konto: ['', Validators.required],
        valuta: [this.heute(), Validators.required],
        ausgabe: [],
        einnahme: []
    }));
  }

  private heute(): string {
    return new Date().toISOString().slice(0, 10);
  }

  onBuchen(): void {
    const buchung = this.toBuchung();
    this.buchen.emit(buchung);
    this.clearForm();
  }

  private clearForm(): void {
    this.buchungForm.get('verwendung')?.reset();
    this.buchungForm.get('empfaenger')?.reset();

    this.buchungen.clear();

    this.addBuchung();
  }

  toBuchung(): Buchung {
    const value: any = this.buchungForm.value;

    const buchung: Buchung = {
      type: value.type,
      verwendung: value.verwendung,
      empfaenger: value.empfaenger,
      umsaetze: []
    }

    const buchungen = value.buchungen;
    for(let i = 0; i < buchungen.length; i++) {
      const kontoBuchung = buchungen[i];

      const einzahlung = kontoBuchung.einnahme;
      const auszahlung = kontoBuchung.ausgabe;

      const umsatz: Umsatz = {
        konto: kontoBuchung.konto,
        valuta: new Date(kontoBuchung.valuta),
        betrag: (auszahlung ? -Number.parseFloat(auszahlung) : Number.parseFloat(einzahlung))
      }
      buchung.umsaetze.push(umsatz);
    }
    return buchung;
  }
}
