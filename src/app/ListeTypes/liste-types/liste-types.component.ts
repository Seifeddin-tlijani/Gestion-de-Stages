import { Component, OnInit } from '@angular/core';
import { Type } from '../../model/type.model';
import { StageService } from '../../services/stage.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateTypeComponent } from "../../UpdateType/update-type/update-type.component";

@Component({
  selector: 'app-liste-types',
  standalone: true,
  imports: [CommonModule, FormsModule, UpdateTypeComponent],
  templateUrl: './liste-types.component.html',
  styleUrl: './liste-types.component.css'
})
export class ListeTypesComponent implements OnInit {
 

  types! : Type[];
  type!: Type;

  ajout:boolean=true;

constructor(private stageService : StageService) { }
ngOnInit(): void {
this.stageService.listeTypes().subscribe(typs => {this.types = typs;
console.log(typs);
});

}

updatedType:Type = {"id":18,"nom":"Full"};

chargerTypes(){
  this.stageService.listeTypes().
  subscribe(typs => {this.types = typs;
  console.log(typs);
  });
  }

typeUpdated(cat:Type){
  console.log("Type updated event",cat);
  this.stageService.ajouterType(cat).
  subscribe( ()=> this.chargerTypes());
  }

  updateType(type:Type) {
    this.updatedType=type;
    this.ajout=false;
  }

}
