import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';

interface Solicitud {
  medicineId: number;
  entryDate: string;
  descripcion: string;
  confirmado: boolean;
}

@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.component.html',
  styleUrls: ['./farmacias.component.css']
})
export class FarmaciasComponent implements OnInit {
  displayedColumns: string[] = ['medicineId', 'entryDate', 'descripcion', 'confirmar'];
  dataSource = new MatTableDataSource<Solicitud>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any[]>('https://api-open-tf-production.up.railway.app/api/v1/dispatch').pipe(
      map(data => data.map(item => ({
        medicineId: item.medicine.medicineId,
        entryDate: item.entryDate,
        descripcion: item.description,
        confirmado: false
      })))
    ).subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  confirmarSolicitud(solicitud: Solicitud): void {
    solicitud.confirmado = !solicitud.confirmado;
  }
}
