import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filtrar-proveedores',
  templateUrl: './filtrar-proveedores.component.html',
  styleUrls: ['./filtrar-proveedores.component.css']
})
export class FiltrarProveedoresComponent {
  proveedor: string = '';

  @Output() filtrar: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<FiltrarProveedoresComponent>) { }

  confirmar(): void {
    const filtro = {
      proveedor: this.proveedor.trim()
    };

    this.filtrar.emit(filtro);
    this.dialogRef.close();
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
