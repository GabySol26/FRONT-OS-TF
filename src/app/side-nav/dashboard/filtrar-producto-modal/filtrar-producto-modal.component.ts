import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filtrar-producto-modal',
  templateUrl: './filtrar-producto-modal.component.html',
  styleUrls: ['./filtrar-producto-modal.component.css']
})
export class FiltrarProductoModalComponent {

  quantity: number = 0;
  commercialName: string = '';

  constructor(public dialogRef: MatDialogRef<FiltrarProductoModalComponent>) {}

  filtrar(): void {
    const filtro = {
      quantity: this.quantity,
      commercialName: this.commercialName
    };

    this.dialogRef.close(filtro);
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
