import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-filtrar-ventas',
  templateUrl: './filtrar-ventas.component.html',
  styleUrls: ['./filtrar-ventas.component.css']
})
export class FiltrarVentasComponent {
  saleId: string = '';
  ruc: string = '';

  @Output() filtrar: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<FiltrarVentasComponent >) { }

  confirmar(): void {
    const filtro = {
      proveedor: this.saleId.trim(),
      ruc: this.ruc.trim()
    };
    this.filtrar.emit(filtro);
    this.dialogRef.close();
  }


  cancelar(): void {
    this.dialogRef.close();
  }
}
