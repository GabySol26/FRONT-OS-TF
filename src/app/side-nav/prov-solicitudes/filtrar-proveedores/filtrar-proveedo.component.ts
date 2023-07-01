import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filtrar-proveedo',
  templateUrl: './filtrar-proveedo.component.html',
  styleUrls: ['./filtrar-proveedo.component.css']
})
export class FiltrarProveedoComponent {
  proveedor: string = '';
  ruc: string = '';

  @Output() filtrar: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<FiltrarProveedoComponent>) { }

  confirmar(): void {
    const filtro = {
      proveedor: this.proveedor.trim(),
      ruc: this.ruc.trim()
    };
    this.filtrar.emit(filtro);
    this.dialogRef.close();
  }


  cancelar(): void {
    this.dialogRef.close();
  }
}
