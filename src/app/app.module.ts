import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
 import { EmployeService } from './service/employeService';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';

import { FicheEnchereComponent } from './fiche-enchere/fiche-enchere.component';
import { RencherirComponent } from './rencherir/rencherir.component';
import { HistoriqueComponent } from './historique/historique.component';
import { TestComponent } from './test/test.component';
import { EncheresPropreComponent } from './encheres-propre/encheres-propre.component';
import { EncheresNormesComponent } from './encheres-normes/encheres-normes.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    FicheEnchereComponent,
    RencherirComponent,
    HistoriqueComponent,
    TestComponent,
    EncheresPropreComponent,
    EncheresNormesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent
      },{
        path:'',
        component: FicheEnchereComponent
      },{
        path:'inscription',
        component: InscriptionComponent
      },{
        path:'fiche',
        component: FicheEnchereComponent
      },{
        path:'encherir',
        component: RencherirComponent
      },{
        path:'historique',
        component: HistoriqueComponent
      },{
        path:'historiquePropre',
        component: EncheresPropreComponent
      },{
        path:'historiqueNorme',
        component: EncheresNormesComponent
      }             
    ])
  ],
  providers: [EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
