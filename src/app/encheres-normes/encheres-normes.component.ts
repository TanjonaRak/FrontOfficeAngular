import { Component, OnInit } from '@angular/core';
import { Login } from '../model/Login';
import { DataService } from '../serve/data.service';

@Component({
  selector: 'app-encheres-normes',
  templateUrl: './encheres-normes.component.html',
  styleUrls: ['./encheres-normes.component.css']
})
export class EncheresNormesComponent implements OnInit {

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

    
    var iduser=sessionStorage.getItem('utilisateur');
    if(iduser!=null){
      this.Log=JSON.parse(iduser);
      this.service.HistoriqueNorme(this.Log.utilisateur).subscribe((res)=>{
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
