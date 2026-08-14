import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datos } from './datos.component';

describe('Datos', () => {
  let component: Datos;
  let fixture: ComponentFixture<Datos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Datos],
    }).compileComponents();

    fixture = TestBed.createComponent(Datos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
