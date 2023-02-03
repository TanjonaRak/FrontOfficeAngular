import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

import { Employe } from '../model/employe';



@Injectable({
  providedIn: 'root'
})
export class EmployeService {
     
    list:Employe[]=[];
    //employ:Employe | undefined;
    data:string[]=[];
    readonly baseUrl='http://127.0.0.1:8000/';
  constructor(private http:HttpClient) { }
  getEMP(){
    
    var url='http://127.0.0.1:8000/';
    return this.http.get(url);
  }
  saveEmp (Emp:Employe){
    var url='http://localhost:3030/employe/save/';
    return this.http.post(url,Emp)
    //return this.http.get('http://localhost:3030/employe/save/?nom='+{nom}+"&&prenom="+{prenom});
  }
}

