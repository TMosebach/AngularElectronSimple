import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchungFormComponent } from './buchung-form.component';

describe('BuchungFormComponent', () => {
  let component: BuchungFormComponent;
  let fixture: ComponentFixture<BuchungFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuchungFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuchungFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
