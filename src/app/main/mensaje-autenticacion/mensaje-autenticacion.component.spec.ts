import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeAutenticacionComponent } from './mensaje-autenticacion.component';

describe('MensajeAutenticacionComponent', () => {
  let component: MensajeAutenticacionComponent;
  let fixture: ComponentFixture<MensajeAutenticacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeAutenticacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeAutenticacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
