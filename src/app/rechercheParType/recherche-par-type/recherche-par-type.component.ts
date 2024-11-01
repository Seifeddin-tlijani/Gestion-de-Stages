import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Stage } from '../../model/stage.model';
import { Type } from '../../model/type.model';
import { StageService } from '../../services/stage.service';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from "../../search-filter.pipe";

@Component({
  selector: 'app-recherche-par-type',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-type.component.html',
  styleUrl: './recherche-par-type.component.css'
})
export class RechercheParTypeComponent {
  constructor(private stageService:StageService){

  }

  stages! : Stage[];
  stage! : Stage;
  type! : Type;
  allStages! : Stage[];
  searchTerm!: string;

  IdType! : number;
types! : Type[];

ngOnInit(): void {
  
  this.loadTypes(); 

  }


  loadTypes() {
    this.stageService.listeTypes().subscribe(
      (types: Type[]) => {
        this.types = types;
        console.log(this.types);
      },
      (error: any) => {
        console.error('Error fetching types:', error); 
      }
    );
  }
  rechercherStages() {
    if (this.IdType) {
      this.stageService.rechercherParType(this.IdType).subscribe(
        (stages: Stage[]) => {
          this.stages = stages;
          this.allStages = stages; // Store the full list of stages for filtering
          console.log(stages);
        },
        (error: any) => {
          console.error('Error fetching stages:', error);
        }
      );
    } else {
      console.warn('No type selected');
    }
  }
  


 
    onKeyUp(filterText: string) {
      if (this.allStages) {
        this.stages = this.allStages.filter(item =>
          item.titre?.toLowerCase().includes(filterText.toLowerCase())
        );
      }
    }
    
}
