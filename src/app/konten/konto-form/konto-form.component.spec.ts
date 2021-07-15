import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontoFormComponent } from './konto-form.component';

describe('KontoFormComponent', () => {
  let component: KontoFormComponent;
  let fixture: ComponentFixture<KontoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KontoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
