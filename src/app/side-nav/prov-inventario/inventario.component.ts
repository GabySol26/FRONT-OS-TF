import {Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import {AgregarIventarioModalComponent} from "./agregar-iventario-modal/agregar-iventario-modal.component";

interface Product {
  medicineId: number;
  commercialName: string;
  genericName: string;
  costPrice: number;
  medicineType: {
    medicineTypeId: number;
    typeName:string;
  }
}

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class inventarioComponentProovedor implements OnInit {
  displayedColumns: string[] = [
    'medicineId',
    'commercialName',
    'genericName',
    'costPrice',
    'typeName',
  ];

  dataSource = new MatTableDataSource<Product>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get<Product[]>('https://api-open-tf-production.up.railway.app/api/v1/medicine')
      .subscribe((data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      });
  }


  AgregarIventarioComponent(): void {
    const dialogRef = this.dialog.open(AgregarIventarioModalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Realizar acciones después de agregar el producto
        console.log('Producto agregado:', result);
        // Puedes llamar a la función fetchData() para actualizar la tabla con los nuevos datos
        this.fetchData();
      }
    });
  }
}

