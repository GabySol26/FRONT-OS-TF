import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prov-settings',
  templateUrl: './prov-settings.component.html',
  styleUrls: ['./prov-settings.component.css']
})
export class SettingsComponentProovedor implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  CerrarSesion(): void{
    localStorage.removeItem('tipo');
    localStorage.removeItem('usuario');
    this.router.navigate(['/sign-in']);
  }

}
