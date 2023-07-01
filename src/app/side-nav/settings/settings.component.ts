import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  CerrarSesion(): void{
    localStorage.removeItem('tipo');
    localStorage.removeItem('usuario');
    this.router.navigate(['/sign-in']);
  }

}
