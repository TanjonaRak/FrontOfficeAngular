import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

import { EmployeService } from '../service/employeService';
import { Employe } from '../model/employe';
import { NgForm } from '@angular/forms';
import { DataService } from '../serve/data.service';
import { Config } from '../model/Config';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mess:any;
  Employe={
      email:"",
      password:"",
  } as Employe;
  router:any;

  utilisateur : any
  constructor(private emp: DataService) { }

  ngOnInit(): void {
  }

  ajout(forme : NgForm)
  {  
      
      this.Employe.email=forme.value.email
      this.Employe.password=forme.value.password
    //// alert(this.Employe.email);
      //var Employe=form.value as Employe;
      this.emp.Login(this.Employe.email,this.Employe.password).subscribe((res)=>{
        this.utilisateur= res 
        console.log(this.utilisateur[0]['data'][0]);
        if(this.utilisateur[0]['data'][0]==null){
          this.mess="error be le izy";
        }
        else{
          sessionStorage.setItem('utilisateur',JSON.stringify(this.utilisateur[0]['data'][0]));
          var produit=localStorage.getItem('produit');
          if(produit!=null){
            window.location.href = '/encherir';
          }else{
            window.location.href = '/fiche';
          }
        }
        // alert(this.mess);
      });
  }

}
