import { DataProduit } from "./produit.tuple"

export interface Produit{
    readonly jdd : string;
    readonly ref : string;
    readonly photo : string;
    readonly titre : string;
    readonly description : string;
    readonly prix : string;
    readonly montage : string;
    readonly tdm_theorique : string;
    readonly stock : string;
    readonly ligne : string;
    readonly embarquement : string;
}

export function processProduitFromTuple(tuple: DataProduit) : Produit{
    return{
        jdd : tuple[0],
        ref : tuple[1],
        photo : tuple[2],
        titre : tuple[3],
        description : tuple[4],
        prix : tuple[5],
        montage : tuple[6],
        tdm_theorique : tuple[7],
        stock : tuple[8],
        ligne : tuple[9],
        embarquement : tuple[10]
    };
}