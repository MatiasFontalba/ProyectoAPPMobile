import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formLogin={
    correoelectronico: "",
    password:""

  }

  constructor() { }

  ngOnInit() {
  }

  iniciarSesion()
  {
    console.log("correoelectronico +this.formLogin.correoelectronico")
    console.log("password +this.formLogin.password")
    

  }

}
