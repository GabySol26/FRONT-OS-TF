import { Component, OnInit, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

interface Supplier {
  dispatchId: string;
  medicine: {
    commercialName: string;
  };
  quantity: number;
  user1:{
    userName: string;
  }
  user2:{
    userName: string;
  }
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  displayedColumns: string[] = ['dispatchId', 'medicine', 'quantity','user1', 'user2'];
  dataSource: MatTableDataSource<Supplier> = new MatTableDataSource<Supplier>([]);

  constructor(private http: HttpClient, private dialog: MatDialog, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
    this.http.get<Supplier[]>('https://api-open-tf-production.up.railway.app/api/v1/dispatch')
      .subscribe((suppliers: Supplier[]) => {
        this.dataSource = new MatTableDataSource(suppliers);
      });
  }

  exportToExcel(): void {
    const data: Supplier[] = this.dataSource.data;
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const excelData: Blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(excelData, 'reporte.xlsx');
  }

}
