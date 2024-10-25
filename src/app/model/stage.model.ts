import { Type } from "./type.model";


    export interface Stage {
        id?: number;             
        titre?: string;          
        dateDebut?: Date;       
        dateFin?: Date;         
        entreprise?: string;     
        type? : Type;
    }
    