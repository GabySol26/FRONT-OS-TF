import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-agregar-producto-modal',
  templateUrl: './agregar-iventario-modal.component.html',
  styleUrls: ['./agregar-iventario-modal.component.css']
})
export class AgregarIventarioModalComponent {
  commercialName: string = '';
  genericName: string = '';
  costPrice: number = 0;
  medicineTypeId: number= 0;

  constructor(
    public dialogRef: MatDialogRef<AgregarIventarioModalComponent>,
    private http: HttpClient
  ) {}

  confirmar(): void {
    const nuevoProducto  = {
      commercialName: this.commercialName,
      genericName: this.genericName,
      costPrice: this.costPrice,
      medicineTypeId: this.medicineTypeId
    };

    this.http.post('https://api-open-tf-production.up.railway.app/api/v1/medicine', nuevoProducto)
      .subscribe(
        response => {
          console.log('Datos guardados exitosamente:', response);
          this.dialogRef.close(response);
        },
      error=> {
          console.error('Error en la solicitud:', error);
          console.error('Cuerpo de la respuesta del servidor:', error.error);
        }
      );
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
