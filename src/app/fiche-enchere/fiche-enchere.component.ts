import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FicheEnchere } from '../model/FicheEnchere';
import { DataService } from '../serve/data.service';
import { LoginComponent } from '../login/login.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-fiche-enchere',
  templateUrl: './fiche-enchere.component.html',
  styleUrls: ['./fiche-enchere.component.css']
})
export class FicheEnchereComponent implements OnInit {
  FicheEnchereTab:any
  STR :string[]=[]
  FicheVR:any
  test:any
  enc:any
  Categorie:any
  CategVR:any
  nbrFiche:number=0
  numbers:number[]=[]
  FicheVRNBR:any
  nbrSary:number[]=[]
  page:number=0
  page1:number=0;
  page2:number=0
  modal:boolean=false


  constructor(private service:DataService) { }



 getOK(id:number,produit:string){
  ///alert()
  var idUTIL=sessionStorage.getItem("utilisateur")
  console.log(idUTIL)
  var prod=[]
  prod.push(produit,id)
  localStorage.setItem("produit",JSON.stringify(prod))
  if(idUTIL!=null){
    window.location.href = '/encherir';
  }else{
    window.location.href = '/login';
    
  }
 }

 getHistorique(id:string){
    localStorage.setItem("idproduit",id)
    window.location.href='historique'

 }

 propre(){
  window.location.href = 'historiquePropre';
}

  ngOnInit(): void {
    this.enc="en cours"
    this.test=false
    
    this.service.getFicheEnchere().subscribe(res=>{
      ///console.log(res)
      this.FicheEnchereTab=res
      this.FicheVRNBR=this.FicheEnchereTab[0]['data']
      this.nbrFiche=this.FicheVRNBR.length
      if((this.nbrFiche%4)!=0){this.nbrFiche=Math.floor(this.nbrFiche/4)+1}
      if((this.nbrFiche%4)==0){this.nbrFiche=(this.nbrFiche/4)}
      console.log("NBR :"+this.nbrFiche)
      for (let i = 1; i < this.nbrFiche; i++) {
        this.numbers.push(i);
      }
    })
    
    this.service.getFicheEncherePAGINE(0).subscribe(res=>{
      ///console.log(res)
      this.FicheEnchereTab=res
      this.FicheVR=this.FicheEnchereTab[0]['data']
      console.log(this.FicheVR)
     
    })

    for (let n= 0; n <2; n++) {
      this.nbrSary.push(n);
    }
    this.service.getTEST().subscribe(res=>{
      console.log(res)
      this.STR=res as string[]
      /// alert(this.STR[0])
    });

    this.service.Categorie().subscribe(res=>{
      this.Categorie=res
      this.CategVR=this.Categorie[0]['data'] 
      console.log(this.CategVR)
    });
   /// alert(this.STR)

    
      ///coRensole.log("DATA FICHE====>"+this.FicheEnchereTab+"FINNNN")
  }

  Recherche(forme : NgForm){
    
    var prix=forme.value.prix
    var motcle=forme.value.motcle
    var categorie=forme.value.categorie
    var dateprix=forme.value.datePrix
    var Ncategorie=forme.value.NCategorie
    var status=forme.value.status
    var data="?ok=0"
    if(prix!=""){
      data+="&&prix="+prix
    }
    if(motcle!=""){
      data+="&&motCle="+motcle
    }if(Ncategorie!=""){
      data+="&&categorie="+Ncategorie
    }if(status!=""){
      data+="status="+status
    }
    console.log(data)
    this.service.RechercheAvancer(data).subscribe((resp)=>{
      this.FicheEnchereTab=resp
      this.FicheVR=this.FicheEnchereTab[0]['data']
      console.log(this.FicheVR)
    })
    ///alert(forme.value.datePrix)
  }
  Pagination(id:number){
    this.service.getFicheEncherePAGINE(id).subscribe(res=>{
      this.FicheEnchereTab=res
      this.FicheVR=this.FicheEnchereTab[0]['data']
      this.page=id
      this.page1=id-1
      this.page2=id+1
    
    })
   
  }

  

  HistoriqueNorme(){
    window.location.href = 'historiqueNorme';
  }
  Voir(){
    if(this.modal==false){
      this.modal=true
    }else{this.modal=false}
    
  }
}
