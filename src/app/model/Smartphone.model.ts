import { Classe } from "./classe.model";


export class Smartphone {
    idSmartphone? : number;
    modelSmartphone? : string;
    nomSmartphone? : string;
    prixSmartphone? : number;
     dateCreation? : Date ;
     classe! : Classe;

    }