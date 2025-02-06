import { Component, computed, inject, signal,model,input } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TableCommandesComponent } from "./components/table-commandes/table-commandes.component";
import { DataProcessServiceService } from './services/data.process.service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, TableCommandesComponent,
    FormsModule
  ], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'CyberCommandes';

  private readonly dataProcessSrv = inject(DataProcessServiceService);

  protected readonly commande = computed(
    () => this.dataProcessSrv.commandes()
  )

  protected page = signal<number>(1);

  protected nbParpage = signal<number>(10);
}

