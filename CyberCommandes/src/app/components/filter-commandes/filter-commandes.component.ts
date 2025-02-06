import { Component, computed, effect, output,signal,model } from '@angular/core';
import { Commande } from '../../data/commande.interface';
import{FormsModule} from '@angular/forms';


export type FctFilterCom =(c: Commande) => boolean;

@Component({
  selector: 'app-filter-commandes',
  imports: [FormsModule],
  templateUrl: './filter-commandes.component.html',
  styleUrl: './filter-commandes.component.css'
})
export class FilterCommandesComponent {
  public readonly filter = output<FctFilterCom>();
  protected readonly filterNum = signal<string>("");

  private readonly filtreNumMin = computed(
    () => this.filterNum().toLowerCase()
  )

  private readonly _effFiltrage = effect(
    () =>{
      this.filter.emit(
        c => c.num_commande.toLowerCase().indexOf(this.filtreNumMin()) !== -1
      )
    }
  )

}
