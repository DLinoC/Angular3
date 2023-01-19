import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiciosService } from '../Servicios/servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })
  
  constructor(private session: ServiciosService) { 
    
  }
  
  onSubmit(){
    sessionStorage.setItem('Token', '123456789');
  }

  ngOnInit(): void {
  }

}
