import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StageService } from '../../services/stage.service';
import { Stage } from '../../model/stage.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Type } from '../../model/type.model';

@Component({
  selector: 'app-update-stage',
  standalone: true,
  imports: [CommonModule , FormsModule , HttpClientModule ],
  templateUrl: './update-stage.component.html',
  styleUrl: './update-stage.component.css',
  providers: [HttpClient],
})
export class UpdateStageComponent implements OnInit {

  currentStage!: Stage ;

  stages: Stage[] = [];
  types: Type[] = [];

  updatedTypeId: number | undefined; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private stageService: StageService,
    private router :Router,
  ) {}

 
  chargerTypes(){
    this.stageService.listeTypes().subscribe(type => {
    console.log(type);
    this.types = type;
    });
    }

 





    updateStage() {
      if (this.updatedTypeId !== undefined) {
        const selectedType = this.types.find(type => type.id === this.updatedTypeId);
        if (selectedType) {
          this.currentStage.type = selectedType; 
        }
      }
    
      this.stageService.updateStage(this.currentStage).subscribe(prod => {
        this.router.navigate(['stages']); 
      });
    }
    

  ngOnInit(): void {
    this.stageService.consulterStage(this.activatedRoute.snapshot.params['id']).subscribe(stage => {
      this.currentStage = stage;
      this.updatedTypeId = this.currentStage.type?.id; 
      console.log(this.currentStage);
      this.chargerTypes();
    });

    this.stageService.listeStages().subscribe(stages => {
      this.stages = stages;
      console.log(stages);
    });
  }


}
