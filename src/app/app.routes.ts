import { Routes } from '@angular/router';
import { ErrorsComponent } from './core/errors/errors.component';
import { HomeComponent } from './component/home/home.component';
import { ClientiComponent } from './component/clienti/clienti.component';
import { DipendentiComponent } from './component/dipendenti/dipendenti.component';
import { LavorazioniComponent } from './component/lavorazioni/lavorazioni.component';
import { OfferteComponent } from './component/offerte/offerte.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';

export const routes: Routes = [
  // {
  //     path: 'errors',
  //     component: ErrorsComponent
  // },
  {
    path: 'dashbord',
    component: DashbordComponent
  },
  {
    path: 'aziende',
    component: HomeComponent,
  },
  {
    path: 'clienti',
    component: ClientiComponent,
  },
  {
    path: 'dipendenti',
    component: DipendentiComponent
  },
  {
    path: 'lavorazioni',
    component: LavorazioniComponent
  },
  {
    path: 'offerte_commerciali',
    component: OfferteComponent
  },
  {
    path: '**',
    redirectTo: 'dashbord',
    pathMatch: 'full'
  }
  // {
  //     path: '',
  //     loadChildren: () => import ('./router/standard.routes').then(mod => mod.routes)
  // },
  // {
  //     path: '**',
  //     redirectTo: 'errors',
  //     pathMatch: 'full'
  // }
];
