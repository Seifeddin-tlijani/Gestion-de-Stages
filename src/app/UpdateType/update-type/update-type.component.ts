import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Type } from '../../model/type.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-type',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-type.component.html',
  styleUrl: './update-type.component.css'
})
export class UpdateTypeComponent {

  @Input()
type! : Type;

@Input()
ajout!:boolean;

@Output()
typeUpdated = new EventEmitter<Type>();

ngOnInit(): void {
  console.log("ngOnInit du composant UpdateCategorie ",this.type);
  }

  saveType(){
    this.typeUpdated.emit(this.type);
    }

}
