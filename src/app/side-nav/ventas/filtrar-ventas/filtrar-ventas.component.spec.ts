import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarVentasComponent} from './filtrar-ventas.component';

describe('FiltrarVentasComponent', () => {
  let component: FiltrarVentasComponent;
  let fixture: ComponentFixture<FiltrarVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
