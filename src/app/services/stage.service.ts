import { Injectable } from '@angular/core';
import { Stage } from '../model/stage.model';
import { Type } from '../model/type.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class StageService {

  private apiURL: string = 'http://localhost:8281/stages/api';
 
  apiURLType: string = 'http://localhost:8281/stages/type';

  constructor(private http: HttpClient , private authService :AuthService) {
  }

  private stages: Stage[] = [];
  private types: Type[] = [
    { id: 1, nom: "Stage d'initiation" },
    { id: 2, nom: "Stage ingénieur" },
    { id: 3, nom: "Stage PFE" }
  ];

  


  
// listeStages(): Observable<Stage[]> {
//   let jwt = this.authService.getToken();
//   jwt = "Bearer "+jwt;
//   let httpHeaders = new HttpHeaders({"Authorization":jwt})
//   return this.http.get<Stage[]>(this.apiURL+"/all",{headers:httpHeaders});
//   }

  listeStages(): Observable<Stage[]>{
    return this.http.get<Stage[]>(this.apiURL+"/all");
    }

  ajouterStage(stage: Stage): Observable<Stage> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Stage>(`${this.apiURL}/addstage`, stage, {headers:httpHeaders});
  }
  supprimerStage(id: number): Observable<void> {
    const url = `${this.apiURL}/delstage/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete<void>(url, {headers:httpHeaders});
  }
  consulterStage(id: number): Observable<Stage> {
    const url = `${this.apiURL}/getbyid/${id}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<Stage>(url , {headers:httpHeaders});
  }

  updateStage(stage: Stage): Observable<Stage> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    return this.http.put<Stage>(`${this.apiURL}/updatestage`, stage, {headers:httpHeaders});
  }

  listeTypes():Observable<Type[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})

    return this.http.get<Type[]>(this.apiURL+"/type" , {headers:httpHeaders});
    }
  rechercherParType(idType: number):Observable< Type[]> {
      const url = `${this.apiURL}/stagetype/${idType}`;
      return this.http.get<Type[]>(url);
      }
   
  rechercherParTitle(title: string):Observable< Type[]> {
        const url = `${this.apiURL}/stageTitle/${title}`;
        return this.http.get<Stage[]>(url);
        }




  consulterType(id: number): Type {
    return this.types.find(type => type.id === id)!;
  }


 

 
   

 
 

  trierStages(): void {
    this.stages.sort((n1, n2) => (n1.id! > n2.id!) ? 1 : (n1.id! < n2.id!) ? -1 : 0);
  }








ajouterType( type: Type):Observable<Type>{
  return this.http.post<Type>(this.apiURLType, type, httpOptions);
  }

  
}
