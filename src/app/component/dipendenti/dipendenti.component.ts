import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from '../../service/table.service';
import { Dipendente } from '../../models/InterfaceLogin/interfaceLogin';
import { ButtonsideComponent } from '../../core/buttonside/buttonside.component';

@Component({
  selector: 'app-dipendenti',
  standalone: true,
  imports: [NavbarComponent, ButtonsideComponent],
  templateUrl: './dipendenti.component.html',
  styleUrl: './dipendenti.component.scss',
})
export class DipendentiComponent {
  dipendenti?: Dipendente[] = [];
  constructor(
    private route: ActivatedRoute,
    private tableService: TableService,
    private routeLink: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params['id']);
      const id = params['id'];
      // recupera altri parametri se necessario
      this.tableService.getDipendenteById(id).subscribe({next: (data) => {
        this.dipendenti = data;
        console.log(this.dipendenti);  
      }, error:(e)=>{
        console.log(e);
      }});
      console.log(this.dipendenti);   
    });
  }
  viewClienti(id: number) {
    
    this.routeLink.navigateByUrl('/clienti?id=' +id);
  }

  indietro() {
    window.history.back();
  }
}
