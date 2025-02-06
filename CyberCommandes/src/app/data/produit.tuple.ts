export type DataProduit =[
    jdd : string,
    ref : string,
    photo : string,
    titre : string,
    description : string,
    prix: string,
    montage : string,
    tdm_theorique : string,
    stock : string,
    ligne : string,
    embarquement : string 
]

export function processeStringToProduit(str: string) : DataProduit{
    const L = str.split("\t");
    return [
        L[0],
        L[1],
        L[2],
        L[3],
        L[4],
        L[5],
        L[6],
        L[7],
        L[8],
        L[9],
        L[10]
    ]
}