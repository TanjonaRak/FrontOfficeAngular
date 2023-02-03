import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Employe } from '../model/employe';
import { membres } from '../model/membres';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string="https://enchere-production-17e0.up.railway.app/"
  constructor(private httpClient:HttpClient) { }

   /*load(){$http.defaults.useXDomain = true;
    delete this.httpClient.headers.common['X-Requested-With'];}*/

  

  getFicheEnchere(){
    return this.httpClient.get(this.url+'FicheEncheres');
  }

  getFicheEncherePAGINE(offset:number){
    return this.httpClient.get(this.url+'FicheEncheres/'+offset);
  }

  getTEST(){
    return this.httpClient.get(this.url+'STR');
  }

  Login(email:string,mdp:string){
    return this.httpClient.post(this.url+'login?email='+email+"&&mdp="+mdp,null);
  }

  Historique(id:number){
    return this.httpClient.get(this.url+"historiques/"+id);
  }

  ReEncherir(user:string,id:number,montant:string){
    ///alert("Miditra")
    return this.httpClient.get(this.url+'Encherir/'+montant+'&&'+id+'&&'+user);
  }

  Categorie(){
    return this.httpClient.get(this.url+'Categories/');
  }

  Recherche(prix:any,motcle:string,categorie:string,categorieid:number,dateFin:string,status:string){
    return this.httpClient.post(this.url+'FicheEncheres?prix='+prix+'&&motcle='+motcle+'&&dateFin='+dateFin+'status='+status+'categorie='+categorie,true)

  }

  RechercheAvancer(data:string){
    return this.httpClient.post(this.url+'FicheEncheres'+data,true)
  }

  HistoriquePropre(id:string){
    return this.httpClient.get(this.url+'encheresPropres/'+id);
  }

  HistoriqueNorme(id:string){
    return this.httpClient.get(this.url+'encheresNormes/'+id);
  }

  getPhoto(idproduit:string){
    return this.httpClient.get(this.url+'photos/'+idproduit);
  }


}
