import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyInterface } from '../models/my-interface';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  urlApi ='http://localhost:3000/commandes'

  constructor(private http: HttpClient) { }

  //CRUD
  getAll(){
    return  this.http.get<MyInterface>(this.urlApi);
  }
  //DELETE
  delete(id: any){
     return this.http.delete(`${this.urlApi}/${id}`);
  }

  //POST

  AddCommande(commandes: any){
    return this.http.post<MyInterface>(this.urlApi,commandes);
  }
}
