import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarIventarioModalComponent} from "./agregar-iventario-modal.component";

describe('AgregarIventarioModalComponent', () => {
  let component: AgregarIventarioModalComponent;
  let fixture: ComponentFixture<AgregarIventarioModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarIventarioModalComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AgregarIventarioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
