import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarProductoModalComponent } from './filtrar-producto-modal.component';

describe('FiltrarProductoModalComponent', () => {
  let component: FiltrarProductoModalComponent;
  let fixture: ComponentFixture<FiltrarProductoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarProductoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarProductoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
