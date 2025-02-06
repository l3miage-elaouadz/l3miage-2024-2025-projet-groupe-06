import { Routes } from '@angular/router';
import { PlanificateurComponent } from './components/planificateur/planificateur.component';
import { LivreurComponent } from './components/livreur/livreur.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { CartedesuivieComponent } from './components/planificateur/cartedesuivie/cartedesuivie.component';

export const routes: Routes = [
    {path : "planificateur", component : PlanificateurComponent },
    {path : "livreur", component : LivreurComponent},
    {path: "connexion", component: ConnexionComponent},
    {path: "carte", component: CartedesuivieComponent}
    //{ path: '', redirectTo: 'planificateur', pathMatch: 'full' },
    //{ path: '**', redirectTo: 'planificateur' }
    
    
];