import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiURI: string = "https://jsonplaceholder.typicode.com/users"


  constructor( private http:HttpClient) { 
    
  }

  getUsers(){
    return this.http.get<any[]>(this.apiURI);
  }

  login(credentials: any){
    return 
  }
}
