import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSolicitudModalComponent } from './agregar-solicitud-modal.component';

describe('AgregarSolicitudModalComponent', () => {
  let component: AgregarSolicitudModalComponent;
  let fixture: ComponentFixture<AgregarSolicitudModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSolicitudModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarSolicitudModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
