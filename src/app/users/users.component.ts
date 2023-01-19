import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../Servicios/servicios.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any= [] 

  getUsers(){
    this.servi.getUsers().subscribe(data => this.users = data)
  }

  constructor(private servi:ServiciosService) { }

  ngOnInit(): void {
  }

}
