import { Routes } from '@angular/router';
import { StagesComponent } from './stages/stages/stages.component';
import { AddStageComponent } from './add-stage/add-stage/add-stage.component';
import { UpdateStageComponent } from './update-stage/update-stage/update-stage.component';
import { RechercheParTypeComponent } from './rechercheParType/recherche-par-type/recherche-par-type.component';
import { ListeTypesComponent } from './ListeTypes/liste-types/liste-types.component';
import { LoginComponent } from './login/login/login.component';
import { StageGuard } from './stage.guard';
import { ForbiddenComponent } from './forbidden/forbidden/forbidden.component';

export const routes: Routes = [
    { path: 'stages', component : StagesComponent},
    {path: "add-stage", component : AddStageComponent , canActivate:[StageGuard]},
    { path: "", redirectTo: "stages", pathMatch: "full" },
    {path: "updateStage/:id", component: UpdateStageComponent},
    {path: "rechercheParType", component : RechercheParTypeComponent},
    {path: "listeTypes", component : ListeTypesComponent},
    {path: "login", component: LoginComponent},
    {path: 'app-forbidden', component: ForbiddenComponent},
];
