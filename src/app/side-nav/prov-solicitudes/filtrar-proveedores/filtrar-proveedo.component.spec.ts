import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarProveedoComponent } from './filtrar-proveedo.component';

describe('FiltrarProveedoComponent', () => {
  let component: FiltrarProveedoComponent;
  let fixture: ComponentFixture<FiltrarProveedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarProveedoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarProveedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
