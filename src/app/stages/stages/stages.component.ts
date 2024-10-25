import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Stage } from '../../model/stage.model';
import { StageService } from '../../services/stage.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-stages',
  standalone: true,
  templateUrl: './stages.component.html',
  styleUrl: './stages.component.css',
  providers: [HttpClient],
  imports: [RouterLink  , CommonModule , HttpClientModule ]
})
export class StagesComponent implements OnInit {

  constructor(private stageService: StageService ) {
  }



  stages!: Stage[];

  

  ngOnInit(): void {

    this.stageService.listeStages().subscribe(stages => {
      console.log(stages);
      this.stages = stages;
      });
  }
 
  chargerStages(){
    this.stageService.listeStages().subscribe(stage => {
    console.log(stage);
    this.stages = stage;
    });
    }

    supprimerStage(s: Stage) {
      const conf = confirm("Etes-vous sûr ?");
      if (conf && s.id) {  
        this.stageService.supprimerStage(s.id).subscribe({
          next: () => {
            console.log("Stage supprimé");
            this.chargerStages();
          },
          error: (err) => console.error("Erreur lors de la suppression du stage:", err)
        });
      } else {
        console.warn("ID de stage non valide");
      }
    }
    
  

}
