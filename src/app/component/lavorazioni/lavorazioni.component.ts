import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { Lavorazione } from '../../models/InterfaceLogin/interfaceLogin';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '../../service/table.service';
import { ButtonsideComponent } from '../../core/buttonside/buttonside.component';
@Component({
  selector: 'app-lavorazioni',
  standalone: true,
  imports: [NavbarComponent, ButtonsideComponent],
  templateUrl: './lavorazioni.component.html',
  styleUrl: './lavorazioni.component.scss',
})
export class LavorazioniComponent {
  lavorazione?: Lavorazione[] = [];

  constructor(
    private route: ActivatedRoute,
    private tableService: TableService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      console.log('query param', params['id']);
      const id = params['id'];
      // recupera altri parametri se necessario
      this.tableService.getLavorazioneById(id).subscribe({
        next: (data) => {
          this.lavorazione = data;
          console.log('dentro subscribe getclientebyid', this.lavorazione);
        },
        error: (e) => {
          console.log('Dentro subscribe error getclientebyid', e);
        },
      });
    });
  }

  indietro() {
    window.history.back();
  }
}
