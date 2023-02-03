import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EtatSolde } from '../model/EtatSolde';
import { Login } from '../model/Login';
import { DataService } from '../serve/data.service';

@Component({
  selector: 'app-rencherir',
  templateUrl: './rencherir.component.html',
  styleUrls: ['./rencherir.component.css']
})
export class RencherirComponent implements OnInit {


  ////Util:any
  Log:Login ={
    id:"",
    token:"",
    dateexpiration:"",
    utilisateur:""
  }

  EtatENCHERIR:EtatSolde={
    solde:0,
    soldeBlocked:0,
    soldeUnBlocked:0,
    situation:""
  }
  ENCHER:any
  result:boolean=false
  
  constructor(private service: DataService) { }

  ReEncherir(forme : NgForm){
    
    ///alert(forme.value.montant)
    var tab=[]
    var user=sessionStorage.getItem("utilisateur");
    ///alert(user)
    var local=localStorage.getItem("produit");
    if(local!=null && user!=null){
      tab=JSON.parse(local);
      this.Log=JSON.parse(user)
      this.service.ReEncherir(this.Log.utilisateur,tab[1],forme.value.montant).subscribe((res)=>{
        
        ////alert("Miditra")
       // alert(res)
       this.ENCHER=res
       this.EtatENCHERIR=this.ENCHER[0]['data'][0]
        console.log(this.ENCHER[0]['data'][0])
        localStorage.removeItem("produit")
        ////alert("solde : "+this.EtatENCHERIR.solde +"SoldeBlocked : "+this.EtatENCHERIR.soldeBlocked+" soldeUnBlocked : "+this.EtatENCHERIR.soldeUnBlocked+"Situation: "+this.EtatENCHERIR.situation);
        this.result=true
      });
    }
  }

  ngOnInit(): void {
  }

  Retour(){
    window.location.href = '/fiche';
  }

}
