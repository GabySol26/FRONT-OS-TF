import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface User {
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


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  registerActive = false;
  emailLogin = '';
  passwordLogin = '';
  nameReg = '';
  lastnameReg = '';
  emailReg = '';
  rucReg = '';
  passwordReg = '';
  confirmReg = '';
  tipoReg = '';
  emptyFields = false;
  users: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) {}

    ngOnInit(): void {
      this.getUsers();
    }

  doLogin(): void {
    let tipo1:string ="Botica"
    let tipo2:string ="Proovedor"

    if (this.emailLogin === '' || this.passwordLogin === '') {
      this.emptyFields = true;
    } else {
      const matchedUser = this.users.find(
        (user) =>
          user.email === this.emailLogin && user.password === this.passwordLogin
      );
      const UserBotica = this.users.find(
        (user) =>
        user.email === this.emailLogin && user.password === this.passwordLogin && user.userType.typeName === "Botica"
      );
      if (matchedUser) {
        alert('Logeo exitoso');
        if(UserBotica){
          this.router.navigate(['/home/inventario']);
          localStorage.setItem("usuario", this.emailLogin);
          localStorage.setItem("tipo", tipo1);
        }
        else{
          this.router.navigate(['/home/inventario-prov']);
          localStorage.setItem("usuario", this.emailLogin);
          localStorage.setItem("tipo", tipo2);
        }
      } else {
        alert('Correo o contraseña invalidos');
      }
    }
  }

  doRegister(): void {
    if (
      this.emailReg === '' ||
      this.nameReg === '' ||
      this.lastnameReg === '' ||
      this.rucReg === '' ||
      this.passwordReg === '' ||
      this.confirmReg === '' ||
      this.rucReg.length !== 11 ||
      this.tipoReg === ''
    ) {
      this.emptyFields = true;
    } else {
      this.postUsers();
      alert('Registro exitoso');
      if(this.tipoReg === '1'){
        this.router.navigate(['/home/inventario-prov']);
      }
      else{
        this.router.navigate(['/home/inventario']);
      }
    }
  }



  toggleRegister(): void {
    this.registerActive = !this.registerActive;
    this.emptyFields = false;
  }

  postUsers():void{
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    const newUser = {
      "userName": this.nameReg,
      "email": this.emailReg,
      "password": this.passwordReg,
      "ruc": parseInt(this.rucReg),
      "registrationDate": formattedDate,
      "userPlan": 0,
      "userType": parseInt(this.tipoReg)
    };

    this.http.post('https://api-open-tf-production.up.railway.app/api/v1/user', newUser)
      .subscribe(
        (response) => {
          console.log('Usuario registrado:', response);
        },
        (error) => {
          console.log('Error al registrar usuario:', error);
        }
      );
  }

  getUsers(): void {
    this.http.get<User[]>('https://api-open-tf-production.up.railway.app/api/v1/user')
      .subscribe(
        (response) => {
          this.users = response;
        },
        (error) => {
          console.log('Ah ocurrido un error al momento de leer los datos:', error);
        }
      );
  }
}