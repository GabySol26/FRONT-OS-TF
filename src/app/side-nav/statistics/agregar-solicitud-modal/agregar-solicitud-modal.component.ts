import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface Solicitud {
  descripcion: string;
  medicineId: number;
  entryDate: string;
  quantity: number;
  expiryDate: string;
  user1: Usuario;
  user2: Usuario;
  medicine: Medicamento;
}

interface Usuario {
  userId: number;
  userName: string;
  email: string;
  password: string;
  ruc: number;
  registrationDate: string;
  userPlan: {
    userPlanId: number;
    planName: string;
  };
  userType: {
    userTypeId: number;
    typeName: string;
  };
}

interface Medicamento {
  medicineId: number;
  commercialName: string;
  genericName: string;
  costPrice: number;
  medicineType: {
    medicineTypeId: number;
    typeName: string;
  };
}

@Component({
  selector: 'app-agregar-solicitud-modal',
  templateUrl: './agregar-solicitud-modal.component.html',
  styleUrls: ['./agregar-solicitud-modal.component.css']
})
export class AgregarSolicitudModalComponent {
  descripcion: string = '';
  medicineId: number = 0;
  entryDate: string = '';
  quantity: number = 0;
  expiryDate: string = '';

  producto: string = '';
  cantidad: number = 0;

  productos: Producto[] = [];

  @Output() solicitudAgregada: EventEmitter<Solicitud> = new EventEmitter<Solicitud>();

  constructor(
    private dialogRef: MatDialogRef<AgregarSolicitudModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {
  }

  agregarProducto(): void {
    // No se almacenan los valores del producto y la cantidad

    // Datos ficticios para demostración
    const nuevoProducto: Producto = {
      producto: 'Producto ficticio',
      cantidad: 0 // Cantidad ficticia
    };
    this.productos.push(nuevoProducto);
  }

  confirmarAbastecimiento(): void {
    const currentDate = new Date().toISOString().slice(0, 10);

    const nuevaSolicitud: Solicitud = {
      descripcion: this.descripcion,
      medicineId: this.medicineId,
      entryDate: currentDate,
      quantity: this.quantity,
      expiryDate: this.expiryDate,
      user1: this.generateUser(),
      user2: this.generateUser(),
      medicine: this.generateMedicine()
    };

    this.http.post('http://localhost:8080/api/v1/dispatch', nuevaSolicitud)
      .pipe(
        tap((response) => {
          console.log('Solicitud agregada:', response);
          this.solicitudAgregada.emit(nuevaSolicitud);
          this.cancelar();
        }),
        catchError((error) => {
          console.error('Error al agregar solicitud:', error);
          return of(null);
        })
      )
      .subscribe();
  }


  cancelar(): void {
    // Restablecer los valores
    this.descripcion = '';
    this.medicineId = 0;
    this.entryDate = '';
    this.quantity = 0;
    this.expiryDate = '';
    this.productos = []; // Limpiar la lista de productos agregados

    // Cerrar el modal
    this.dialogRef.close();
  }

  generateUser(): Usuario {
    // Generar un usuario ficticio
    return {
      userId: Math.floor(Math.random() * 1000),
      userName: 'Usuario' + Math.floor(Math.random() * 1000),
      email: 'usuario' + Math.floor(Math.random() * 1000) + '@example.com',
      password: 'password' + Math.floor(Math.random() * 1000),
      ruc: Math.floor(Math.random() * 10000000000),
      registrationDate: new Date().toISOString().slice(0, 10),
      userPlan: {
        userPlanId: Math.floor(Math.random() * 1000),
        planName: 'Plan' + Math.floor(Math.random() * 1000)
      },
      userType: {
        userTypeId: Math.floor(Math.random() * 1000),
        typeName: 'Tipo' + Math.floor(Math.random() * 1000)
      }
    };
  }

  generateMedicine(): Medicamento {
    // Generar un medicamento ficticio
    return {
      medicineId: Math.floor(Math.random() * 1000),
      commercialName: 'Medicamento' + Math.floor(Math.random() * 1000),
      genericName: 'Generico' + Math.floor(Math.random() * 1000),
      costPrice: Math.random() * 10,
      medicineType: {
        medicineTypeId: Math.floor(Math.random() * 1000),
        typeName: 'Tipo' + Math.floor(Math.random() * 1000)
      }
    };
  }
}

  interface Producto {
  producto: string;
  cantidad: number;
}
