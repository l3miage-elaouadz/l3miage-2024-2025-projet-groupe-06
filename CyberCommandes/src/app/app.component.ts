import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LivreurComponent } from './components/livreur/livreur.component';
import { AccueilComponent } from './components/livreur/accueil/accueil.component';
import { ChargerunetourneeComponent } from './components/livreur/chargerunetournee/chargerunetournee.component';
import { ParametreComponent } from './components/livreur/parametre/parametre.component';
import { TourneedujourComponent } from './components/livreur/tourneedujour/tourneedujour.component';
import { PlanificateurComponent } from './components/planificateur/planificateur.component';
import { AjusterunejourneeComponent } from './components/planificateur/ajusterunejournee/ajusterunejournee.component';
import { CartedesuivieComponent } from './components/planificateur/cartedesuivie/cartedesuivie.component';
import { ConstruireunejourneeComponent } from './components/planificateur/construireunejournee/construireunejournee.component';
import { DashbordComponent } from './components/planificateur/dashbord/dashbord.component';
import { PlanfierunejourneeComponent } from './components/planificateur/planfierunejournee/planfierunejournee.component';
import { VisualiserunejourneeComponent } from './components/planificateur/visualiserunejournee/visualiserunejournee.component';
import { ConnexionComponent } from './components/connexion/connexion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RouterLink, LivreurComponent, 
    AccueilComponent, ChargerunetourneeComponent, LivreurComponent,ParametreComponent, TourneedujourComponent,
    PlanificateurComponent, AjusterunejourneeComponent, CartedesuivieComponent, ConstruireunejourneeComponent,
    DashbordComponent, PlanfierunejourneeComponent, VisualiserunejourneeComponent, ConnexionComponent,
  ], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'CyberCommandes';
}

