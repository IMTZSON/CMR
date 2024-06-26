import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from '../../service/table.service';
import { Cliente } from '../../models/InterfaceLogin/interfaceLogin';
import { ButtonsideComponent } from '../../core/buttonside/buttonside.component';

@Component({
  selector: 'app-clienti',
  standalone: true,
  imports: [NavbarComponent, ButtonsideComponent],
  templateUrl: './clienti.component.html',
  styleUrl: './clienti.component.scss',
})
export class ClientiComponent implements OnInit {
  cliente?: Cliente[];
  removeClient: boolean = false;
  spostaClient: boolean = false;
  modificaClient: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private tableService: TableService,
    private routelink: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      console.log('query param', params['id']);
      const id = params['id'];
      // recupera altri parametri se necessario
      this.tableService.getClienteById(id).subscribe({
        next: (data) => {
          this.cliente = data;
          console.log('dentro subscribe getclientebyid', this.cliente);
        },
        error: (e) => {
          console.log('Dentro subscribe error getclientebyid', e);
        },
      });
      console.log(this.tableService.getClienteById);
    });
  }
  viewRemove() {
    if (this.removeClient != true) {
      this.removeClient = true;
    } else {
      this.removeClient = false;
    }
  }

  viewSposta(): void {
    if (this.spostaClient != true) {
      this.spostaClient = true;
    } else {
      this.spostaClient = false;
    }
  }
  viewModifica(): void {
    if (this.modificaClient != true) {
      this.modificaClient = true;
    } else {
      this.modificaClient = false;
    }
  }

  viewLavorazioni(id: number) {
    this.routelink.navigateByUrl('/offerte_commerciali?id=' + id);
  }

  indietro() {
    window.history.back();
  }
}
