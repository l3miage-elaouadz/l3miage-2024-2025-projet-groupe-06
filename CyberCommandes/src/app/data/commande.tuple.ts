//exemple : jdd0;c004;livree;09/01/2024, 00:00;lsaleh@brt.fr;l004-06,l004-07

export type DataCommande = [
    jdd : string,
    num_commande : string,
    etat : string,
    date : string,
    mail_client : string,
    ligne : string 
]

export function processeStringToCommande(str: string) : DataCommande{
    const L = str.split(";");
    return [
        L[0],
        L[1],
        L[2],
        L[3],
        L[4],
        L[5],
    ]
}