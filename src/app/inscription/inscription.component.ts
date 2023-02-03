import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { membres } from '../model/membres';
import { DataService } from '../serve/data.service';



@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  mess:any;
  membre={
    email:"",
    nom:"",
    dtn:"",
    password:""
  } as membres;
  constructor(private service: DataService) { }

  ngOnInit(): void {
  }
  inscrit(forme:NgForm){
    // thi
    if(forme.value.password==forme.value.Rpassword){
       this.membre.email=forme.value.email;
       this.membre.dtn=forme.value.dtn;
       this.membre.password=forme.value.password;
       this.membre.nom=forme.value.nom;

       /*this.service.inscrit(this.membre).subscribe((res)=>{
        this.mess=res;
      
       });*/
       
       this.service.getFicheEnchere().subscribe((resp)=>{
          ///console.log(resp)
       });
       //window.location.href = '/home';
      //alert("tsy mety");
    }
    else{
      this.mess="verifier votre mot de passe";
    }
  }

}
