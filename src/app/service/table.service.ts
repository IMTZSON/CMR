import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  Azienda,
  Cliente,
  AnagraficaCliente,
  OffertaCommerciale,
  Dipendente,
  Lavorazione,
  ServizioVenduto,
  ReferenteCliente,
} from '../models/InterfaceLogin/interfaceLogin';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private aziendeUrl = 'assets/aziende.json';
  private clientiUrl = 'assets/clienti.json';
  private lavorazioniUrl = 'assets/lavorazioni.json';
  private anagraficaClientiUrl = 'assets/anagrafica_clienti.json';
  private anagraficaDipententiUrl = 'assets/anagrafica_dipendenti.json';
  private offertaCommercialeUrl = 'assets/offerte_commerciali.json';
  private referentiClientiUrl = 'assets/referenti_clienti.json';
  private serviziVendutiUrl = 'assets/servizi_venduti.json';

  constructor(private http: HttpClient) {}

  // Aziende
  getAziende(): Observable<Azienda[]> {
    return this.http.get<Azienda[]>(`${this.aziendeUrl}`, httpOptions).pipe(
      catchError((error) => {
        console.error('Error fetching aziende:', error);
        return of([]); // Ritorna un array vuoto in caso di errore
      })
    );
  }

  getAziendaById(id: number): Observable<Azienda> {
    return new Observable<Azienda>((observer) => {
      this.getAziende().subscribe(
        (aziende) => {
          if (Array.isArray(aziende)) {
            const azienda = aziende.find((a) => a.ID_Azienda == id);
            observer.next(azienda);
          } else {
            observer.error('Data is not an array');
          }
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  // Clienti
  getClienti(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.clientiUrl}`).pipe(
      catchError((error) => {
        console.error('Error fetching clienti:', error);
        return of([]);
      })
    );
  }

  getClienteById(id: number): Observable<Cliente[]> {
    return new Observable<Cliente[]>((observer) => {
      this.getClienti().subscribe(
        (clienti) => {
          if (Array.isArray(clienti)) {
            console.log(clienti);
            const cliente = clienti.filter(
              (clienti) => clienti.ID_Azienda == id
            );

            console.log(cliente);
            observer.next(cliente);
          } else {
            observer.error('Data is not an array');
          }
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  // Anagrafica Clienti
  getAnagraficaClienti(): Observable<AnagraficaCliente[]> {
    return this.http
      .get<AnagraficaCliente[]>(`${this.anagraficaClientiUrl}`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching anagrafica clienti:', error);
          return of([]);
        })
      );
  }

  getAnagraficaClienteById(id: number): Observable<AnagraficaCliente> {
    return new Observable<AnagraficaCliente>((observer) => {
      this.getAnagraficaClienti().subscribe(
        (anagrafica) => {
          if (Array.isArray(anagrafica)) {
            const item = anagrafica.find((a) => a.ID_Anagrafica_Cliente == id);
            observer.next(item);
          } else {
            observer.error('Data is not an array');
          }
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  // Offerte Commerciali
  getOfferteCommerciali(): Observable<OffertaCommerciale[]> {
    return this.http
      .get<OffertaCommerciale[]>(`${this.offertaCommercialeUrl}`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching offerte commerciali:', error);
          return of([]);
        })
      );
  }

  getOffertaCommercialeById(id: number): Observable<OffertaCommerciale[]> {
    return new Observable<OffertaCommerciale[]>((observer) => {
      this.getOfferteCommerciali().subscribe(
        (offerte) => {
          if (Array.isArray(offerte)) {
            const offerta = offerte.filter(
              (offerte) => offerte.ID_Cliente == id
            );
            observer.next(offerta);
          } else {
            observer.error('Data is not an array');
          }
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  // Dipendenti
  getDipendenti(): Observable<Dipendente[]> {
    return this.http.get<Dipendente[]>(`${this.anagraficaDipententiUrl}`).pipe(
      catchError((error) => {
        console.error('Error fetching dipendenti:', error);
        return of([]);
      })
    );
  }

  getDipendenteById(id: number): Observable<Dipendente[]> {
    return new Observable<Dipendente[]>((observer) => {
      this.getDipendenti().subscribe(
        (dipendenti) => {
          if (Array.isArray(dipendenti)) {
            const dipendente = dipendenti.filter(
              (dipendenti) => dipendenti.ID_Azienda == id
            );
            observer.next(dipendente);
          } else {
            observer.error('Data is not an array');
          }
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  // Lavorazioni
  getLavorazioni(): Observable<Lavorazione[]> {
    return this.http.get<Lavorazione[]>(`${this.lavorazioniUrl}`).pipe(
      catchError((error) => {
        console.error('Error fetching lavorazioni:', error);
        return of([]);
      })
    );
  }

  getLavorazioneById(id: number): Observable<Lavorazione[]> {
    return new Observable<Lavorazione[]>((observer) => {
      this.getLavorazioni().subscribe(
        (lavorazioni) => {
          if (Array.isArray(lavorazioni)) {
            const lavorazione = lavorazioni.filter(
              (lavorazioni) => lavorazioni.ID_Cliente == id
            );
            observer.next(lavorazione);
          } else {
            observer.error('Data is not an array');
          }
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  // Servizi Venduti
  getServiziVenduti(): Observable<ServizioVenduto[]> {
    return this.http.get<ServizioVenduto[]>(`${this.serviziVendutiUrl}`).pipe(
      catchError((error) => {
        console.error('Error fetching servizi venduti:', error);
        return of([]);
      })
    );
  }

  getServizioVendutoById(id: number): Observable<ServizioVenduto> {
    return new Observable<ServizioVenduto>((observer) => {
      this.getServiziVenduti().subscribe(
        (servizi) => {
          if (Array.isArray(servizi)) {
            const servizio = servizi.find((s) => s.ID_Servizio == id);
            observer.next(servizio);
          } else {
            observer.error('Data is not an array');
          }
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

  // Referenti Clienti
  getReferentiClienti(): Observable<ReferenteCliente[]> {
    return this.http
      .get<ReferenteCliente[]>(`${this.referentiClientiUrl}`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching referenti clienti:', error);
          return of([]);
        })
      );
  }

  getReferenteClienteById(id: number): Observable<ReferenteCliente> {
    return new Observable<ReferenteCliente>((observer) => {
      this.getReferentiClienti().subscribe(
        (referenti) => {
          if (Array.isArray(referenti)) {
            const referente = referenti.find((r) => r.ID_Referente == id);
            observer.next(referente);
          } else {
            observer.error('Data is not an array');
          }
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }
}
