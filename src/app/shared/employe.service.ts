import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Employe } from './employe.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  selectedEmploye:Employe;
  employe:Employe[];
  constructor() { }
}
