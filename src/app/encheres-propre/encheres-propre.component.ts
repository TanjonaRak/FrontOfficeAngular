import { Component, OnInit } from '@angular/core';

import { Login } from '../model/Login';
import { DataService } from '../serve/data.service';

@Component({
  selector: 'app-encheres-propre',
  templateUrl: './encheres-propre.component.html',
  styleUrls: ['./encheres-propre.component.css']
})
export class EncheresPropreComponent implements OnInit {


  Historique:any
  HistoriqueVR : any
  constructor(private service:DataService) { }

  Log:Login ={
    id:"",
    token:"",
    dateexpiration:"",
    utilisateur:""
  }

  ngOnInit(): void {

    var id=localStorage.getItem("idproduit");
    var iduser=sessionStorage.getItem('utilisateur');
    if(iduser!=null){
      this.Log=JSON.parse(iduser);
      console.log(iduser)
      this.service.HistoriquePropre(this.Log.utilisateur).subscribe((res)=>{
        this.Historique=res
        this.HistoriqueVR=this.Historique[0]['data']
        console.log(this.HistoriqueVR)
      });
    }else{
      window.location.href = '/login';
    }
    
  }

  retour(){
    window.location.href = '/fiche';
  }

}
