import { DataClient } from "./client.tuple";

export interface Client{
    readonly jdd : string;
    readonly code_client : string;
    readonly mail_client : string;
    readonly prenom : string;
    readonly nom : string;
    readonly adresse : string;
    readonly code_postal : string;
    readonly ville : string;
    readonly latitude : string;
    readonly longitude : string;
    readonly commande : string;
    readonly etat : string;
}

export function processClientFromTuple(tuple: DataClient) : Client{
    return{
        jdd : tuple[0],
        code_client : tuple[1],
        mail_client : tuple[2],
        prenom : tuple[3],
        nom : tuple[4],
        adresse : tuple[5],
        code_postal : tuple[6],
        ville : tuple[7],
        latitude : tuple[8],
        longitude : tuple[9],
        commande : tuple[10],
        etat : tuple[11],
    };
}