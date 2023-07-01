import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-agregar-producto-modal',
  templateUrl: './agregar-producto-modal.component.html',
  styleUrls: ['./agregar-producto-modal.component.css']
})
export class AgregarProductoModalComponent {
  quantity: number = 0;
  salePrice: number = 0;
  user: number = 0;
  medicine: number= 0;

  constructor(
    public dialogRef: MatDialogRef<AgregarProductoModalComponent>,
    private http: HttpClient
  ) {}

  confirmar(): void {
    const data = {
      quantity: this.quantity,
      salePrice: this.salePrice,
      user: this.user,
      medicine: this.medicine,
    };

    // Realizar la solicitud HTTP para guardar los datos
    this.http.post('https://api-open-tf-production.up.railway.app/api/v1/inventory', data)
      .subscribe(
        response => {
          console.log('Datos guardados exitosamente:', response);
          // Realizar acciones adicionales si es necesario
        },
        error => {
          console.error('Error al guardar los datos:', error);
          // Realizar acciones adicionales si es necesario
        }
      );
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
