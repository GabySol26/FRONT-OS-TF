import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FiltrarProveedoComponent } from './filtrar-proveedores/filtrar-proveedo.component';
interface Supplier {
  userId: number;
  userName: string;
  ruc: number;
  userType: {
    userTypeId: number;
    typeName: string;
  };
  favorite: boolean;
}
@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
  dataSource: MatTableDataSource<Supplier> = new MatTableDataSource<Supplier>([]);
  displayedColumns: string[] = ['userId', 'typeName', 'userName', 'ruc', 'favorite'];
  favoriteMode = true; // Estado del modo de visualización de favoritos

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
    this.http.get<Supplier[]>('https://api-open-tf-production.up.railway.app/api/v1/user')
      .subscribe((suppliers: Supplier[]) => {
        const filteredSuppliers = suppliers.filter(supplier => supplier.userType.typeName === 'Botica');
        this.dataSource = new MatTableDataSource(filteredSuppliers);
      });
  }

  openFiltrarProveedoresModal(): void {
    const dialogRef = this.dialog.open(FiltrarProveedoComponent, {
      width: '600px'
    });

    dialogRef.componentInstance.filtrar.subscribe((filtro: any) => {
      console.log('Filtro aplicado:', filtro);
      this.filtrarProveedores(filtro.proveedor);
    });
  }

  filtrarProveedores(proveedor: string): void {
    this.dataSource.filter = proveedor.trim().toLowerCase();
  }

  toggleFavoriteMode(): void {
    this.dataSource.filter = this.favoriteMode ? 'true' : '';
    this.favoriteMode = !this.favoriteMode;
  }

  updateFavoriteStatus(supplier: Supplier): void {
    if (supplier.favorite) {
      // Aquí puedes realizar la acción correspondiente cuando se marca como favorito
      console.log('Proveedor marcado como favorito:', supplier);
    } else {
      // Aquí puedes realizar la acción correspondiente cuando se desmarca como favorito
      console.log('Proveedor desmarcado como favorito:', supplier);
    }
  }
}
