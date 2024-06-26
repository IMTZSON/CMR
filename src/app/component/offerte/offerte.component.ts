import { Component, OnInit } from '@angular/core';
import { Dipendente, OffertaCommerciale } from '../../models/InterfaceLogin/interfaceLogin';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '../../service/table.service';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { ButtonsideComponent } from '../../core/buttonside/buttonside.component';

@Component({
  selector: 'app-offerte',
  standalone: true,
  imports: [NavbarComponent, ButtonsideComponent],
  templateUrl: './offerte.component.html',
  styleUrl: './offerte.component.scss'
})
export class OfferteComponent implements OnInit {
  offerte?: OffertaCommerciale[] = [];
  dipendenti?: Dipendente[];
  constructor(
    private route: ActivatedRoute,
    private tableService: TableService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      console.log('query param', params['id']);
      const id = params['id'];
      // recupera altri parametri se necessario
      this.tableService.getOffertaCommercialeById(id).subscribe({
        next: (data) => {
          this.offerte = data;
          console.log('dentro subscribe getclientebyid', this.offerte);
        },
        error: (e) => {
          console.log('Dentro subscribe error getclientebyid', e);
        },
      });
      this.tableService.getDipendenteById(id).subscribe({next: (data) => {
        this.dipendenti = data;
        console.log(this.dipendenti);  
      }, error:(e)=>{
        console.log(e);
      }});
      
    });
  }

  indietro() {
    window.history.back();
  }
}
