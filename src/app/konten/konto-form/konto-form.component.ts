import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Konto } from '../domain/konto';

@Component({
  selector: 'app-konto-form',
  templateUrl: './konto-form.component.html',
  styleUrls: ['./konto-form.component.scss']
})
export class KontoFormComponent implements OnInit {

  @Output() doSpeichern = new EventEmitter<Konto>();

  kontoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.kontoForm = this.fb.group({
      type: ['Konto', Validators.required],
      name: ['', Validators.required],
      bank: [],
      iban: []
    });
  }

  speichern(): void {
    const konto = this.kontoForm.value;
    konto.saldo = 0.0;
    this.doSpeichern.emit(konto);
  }
}
