import { DataCommande } from "./commande.tuple";

export interface Commande{
    readonly jdd : string;
    readonly num_commande : string;
    readonly etat : string;
    readonly date : string;
    readonly mail_client : string;
    readonly ligne : string;
}

export function processCommandeFromTuple(tuple: DataCommande) : Commande{
    return{
        jdd : tuple[0],
        num_commande : tuple[1],
        etat : tuple[2],
        date : tuple[3],
        mail_client : tuple[4],
        ligne : tuple[5]
    };
}