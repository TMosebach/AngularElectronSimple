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
      name: ['', Validators.required],
      bank: []
    });
  }

  speichern(): void {
    this.doSpeichern.emit(this.kontoForm.value);
  }
}
