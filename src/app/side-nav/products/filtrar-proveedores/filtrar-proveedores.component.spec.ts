import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarProveedoresComponent } from './filtrar-proveedores.component';

describe('FiltrarProveedoresComponent', () => {
  let component: FiltrarProveedoresComponent;
  let fixture: ComponentFixture<FiltrarProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarProveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
