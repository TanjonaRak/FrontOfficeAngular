import { Component, OnInit } from '@angular/core';
import { DataService } from '../serve/data.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
Historique:any
HistoriqueVR:any


  constructor(private service:DataService) { }

  ngOnInit(): void {
    var id=localStorage.getItem("idproduit");
    if(id!=null){
      var idp=JSON.parse(id);
      this.service.Historique(idp).subscribe((res)=>{
        this.Historique=res
        this.HistoriqueVR=this.Historique[0]['data']
        console.log(this.HistoriqueVR)
      });
    }
    
   
  }

}
