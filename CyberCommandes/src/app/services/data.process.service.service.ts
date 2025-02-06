import { Injectable, signal } from '@angular/core';
import { Commande, processCommandeFromTuple } from '../data/commande.interface';
import rawData from '../data/commande.csv'
import { processeStringToCommande } from '../data/commande.tuple';
import rawClientData from '../data/client.csv'
import { Client, processClientFromTuple } from '../data/client.interface';
import { processeStringToClient } from '../data/client.tuple';
import rawProduitData from '../data/produit.cvs'
import { processProduitFromTuple, Produit } from '../data/produit.interface';
import { processeStringToProduit } from '../data/produit.tuple';

@Injectable({
  providedIn: 'root'
})
export class DataProcessServiceService {

  private readonly _commandes = signal<readonly Commande[]>([]);
  public readonly commandes = this._commandes.asReadonly();

  private readonly _clients = signal<readonly Client[]>([]);
  public readonly client = this._clients.asReadonly();

  private readonly _produit = signal<readonly Produit[]>([]);
  public readonly produit = this._produit.asReadonly();

  constructor() { 
    const lines = rawData.split("\n");
    const LData = lines.map(processeStringToCommande)
    this._commandes.set(LData.map(processCommandeFromTuple));

    const linesClient = rawClientData.split("\t");
    const LDataClient = linesClient.map(processeStringToClient)
    this._clients.set(LDataClient.map(processClientFromTuple));

    const linesProduit = rawProduitData.split("\t");
    const LdataProduit = linesProduit.map(processeStringToProduit)
    this._produit.set(LdataProduit.map(processProduitFromTuple));

    
  };

  
  
}
