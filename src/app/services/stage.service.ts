import { Injectable } from '@angular/core';
import { Stage } from '../model/stage.model';
import { Type } from '../model/type.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class StageService {

  private apiURL: string = 'http://localhost:8281/stages/api';


  constructor(private http: HttpClient) {
  }



  private stages: Stage[] = [];
  private types: Type[] = [
    { id: 1, nom: "Stage d'initiation" },
    { id: 2, nom: "Stage ingénieur" },
    { id: 3, nom: "Stage PFE" }
  ];
  


  listeStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.apiURL);
  }

 
  listeTypes():Observable<Type[]>{

    return this.http.get<Type[]>(this.apiURL+"/type");
    }

  consulterType(id: number): Type {
    return this.types.find(type => type.id === id)!;
  }

  ajouterStage(stage: Stage): Observable<Stage> {
    return this.http.post<Stage>(this.apiURL, stage, httpOptions);
  }



  supprimerStage(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }



  consulterStage(id: number): Observable<Stage> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Stage>(url);
    }

  trierStages(): void {
    this.stages.sort((n1, n2) => (n1.id! > n2.id!) ? 1 : (n1.id! < n2.id!) ? -1 : 0);
  }

 

  updateStage(prod :Stage) : Observable<Stage>
{
return this.http.put<Stage>(this.apiURL, prod, httpOptions);
}


  
}
