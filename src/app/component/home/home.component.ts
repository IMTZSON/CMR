import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../core/sidebar/sidebar.component';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { TableService } from '../../service/table.service';
import { Azienda, Cliente, Dipendente } from '../../models/InterfaceLogin/interfaceLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],  
})
export class HomeComponent implements OnInit{
  aziende?: Azienda[] ;
  clienti?: Cliente[];
  dipendenti?: Dipendente[];
  constructor(private tableService: TableService, private router: Router) {
    this.getAziende()
  }

  
  ngOnInit() {
    this.tableService.getClienti().subscribe(resClienti => {
      this.clienti = resClienti;
      console.log(this.clienti);
    });
    this.tableService.getDipendenti().subscribe(resDipendenti => {
      this.dipendenti = resDipendenti;
      console.log(this.dipendenti);
    })
  }  
  
  viewClienti(id: number) {
    this.router.navigateByUrl('/clienti?id=' +id);
  }
  viewDipendenti(id: number) {
    this.router.navigateByUrl('/dipendenti?id=' +id);
  }
 

  getAziende() {
    this.tableService.getAziende().subscribe({next: (data) => {
      this.aziende = data;
      console.log(this.aziende);  
    }, error:(e)=>{
      console.log(e);
    }});
  }

}