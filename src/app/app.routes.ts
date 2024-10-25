import { Routes } from '@angular/router';
import { StagesComponent } from './stages/stages/stages.component';
import { AddStageComponent } from './add-stage/add-stage/add-stage.component';
import { UpdateStageComponent } from './update-stage/update-stage/update-stage.component';

export const routes: Routes = [
    { path: 'stages', component : StagesComponent},
    {path: "add-stage", component : AddStageComponent},
    { path: "", redirectTo: "stages", pathMatch: "full" },
    {path: "updateStage/:id", component: UpdateStageComponent}
];
