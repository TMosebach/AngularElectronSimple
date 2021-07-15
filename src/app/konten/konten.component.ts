import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-konten',
  templateUrl: './konten.component.html',
  styleUrls: ['./konten.component.scss']
})
export class KontenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  doNeu(): void {
    this.router.navigate(['konten', 'neu']);
  }
}
