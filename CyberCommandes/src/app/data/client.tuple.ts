//jdd0	x165	aalves@brt.fr	ravi	ALVES	3 Chemin des Tilleuls	38100	Grenoble	45.165727	5.735303	c084,c224,c298	livré

export type DataClient = [
    jdd : string,
    code_client : string,
    mail_client : string,
    prenom : string,
    nom : string,
    adresse : string,
    code_postal : string,
    ville : string,
    latitude : string,
    longitude : string,
    commande : string,
    etat : string
]

export function processeStringToClient(str: string) : DataClient{
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
        L[10],
        L[11]
    ]
}