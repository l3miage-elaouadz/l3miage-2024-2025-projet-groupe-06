import { Component, computed, input,model } from '@angular/core';
import { Commande } from '../../data/commande.interface';

@Component({
  selector: 'app-table-commandes',
  imports: [],
  templateUrl: './table-commandes.component.html',
  styleUrl: './table-commandes.component.css'
})
export class TableCommandesComponent {
  public readonly data = input.required<readonly Commande[]>();
  public readonly page = model<number>(1);

  public readonly nbParpage = input<number>(10);

  protected readonly nbPage = computed(
    () => Math.ceil(this.data().length / this.nbParpage())
  );

  private readonly indiceDepartCommande = computed<number>(
    () => this.page() * this.nbParpage()
    )


  protected readonly commandes = computed(
    () => this.data().slice(
      this.indiceDepartCommande(),
      this.indiceDepartCommande() + this.nbParpage()
    )
  )

  protected previousPage(){
    this.page.set(
      this.page() - 1
    )
  }

  protected nextPage(){
    this.page.update( p => p + 1)
  }

}
