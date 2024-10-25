import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Stage } from '../../model/stage.model';
import { StageService } from '../../services/stage.service';
import { Type } from '../../model/type.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-stage',
  standalone: true,
  imports: [FormsModule , CommonModule , ReactiveFormsModule , HttpClientModule ],
  templateUrl: './add-stage.component.html',
  styleUrl: './add-stage.component.css',
  providers: [HttpClient],
})
export class AddStageComponent implements OnInit {
 
  types! : Type[];
newIdType! : number;
newType! : Type;

stageForm!: FormGroup;




  constructor(private stageService:StageService ,
    private router : Router , private fb: FormBuilder
  ){

  }
 

  ngOnInit() {

    this.stageForm = this.fb.group({
      idStage: ['', Validators.required],
      titre: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      entreprise: ['', Validators.required],
      idType: ['', Validators.required]  

    })

      this.stageService.listeTypes().subscribe(typs => {this.types = typs;
      console.log(typs);

      });;

    }

    


  

    addStage() {
      if (this.stageForm.valid) {

        const selectedType = this.types.find(type => type.id === +this.stageForm.value.idType);

          console.log('Selected type ID:', this.stageForm.value.idType);

  
        
          if (!selectedType) {
              alert('Invalid type selected');
              return;
          }
  
          const newStage: Stage = {
              id: this.stageForm.value.id,
              titre: this.stageForm.value.titre,
              dateDebut: this.stageForm.value.dateDebut,
              dateFin: this.stageForm.value.dateFin,
              entreprise: this.stageForm.value.entreprise,
              type: { id: selectedType.id }

          };
  
          this.stageService.ajouterStage(newStage).subscribe({
              next: (stage) => {
                  console.log('Stage added successfully:', stage);
                  this.router.navigate(['stages']);
              },
              error: (error) => {
                  console.error('Error adding stage:', error);
                  alert('There was an error adding the stage. Please try again.');
              }
          });
      } else {
          alert('Please fill out all fields correctly');
      }
  }

  
  
   


}
