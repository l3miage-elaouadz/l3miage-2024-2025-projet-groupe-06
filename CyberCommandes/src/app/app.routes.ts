import { Routes } from '@angular/router';
import { PlanificateurComponent } from './components/planificateur/planificateur.component';
import { LivreurComponent } from './components/livreur/livreur.component';
import { ConnexionComponent } from './components/connexion/connexion.component';

export const routes: Routes = [
    {path : "planificateur", component : PlanificateurComponent },
    {path : "livreur", component : LivreurComponent},
    {path: "connexion", component: ConnexionComponent}
    //{ path: '', redirectTo: 'planificateur', pathMatch: 'full' },
    //{ path: '**', redirectTo: 'planificateur' }
    
    
];
