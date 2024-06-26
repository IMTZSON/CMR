export type loginInfo = {
  username: string;
  password: string;
};

export type loginIn = {
  username: string;
  token: string;
  role: string;
  email: string;
  expires_In: number;
};

export interface Azienda {
  ID_Azienda: number;
  Nome_Azienda: string;
  Indirizzo: string;
  Telefono: string;
  Email: string;
}
export interface Cliente {
  ID_Cliente: number;
  ID_Azienda: number;
  Nome_Cliente: string;
  Partita_IVA: string;
  Indirizzo: string;
  Telefono: string;
  Email: string;
}
export interface AnagraficaCliente {
  ID_Anagrafica_Cliente: number;
  ID_Azienda: number;
  ID_Cliente: number;
  Nome_Referente: string;
  Cognome_Referente: string;
  Telefono_Referente: string;
  Email_Referente: string;
}
export interface OffertaCommerciale {
  ID_Offerta: number;
  ID_Cliente: number;
  ID_Dipendente: number;
  Descrizione: string;
  Data_Offerta: string;
  Valore_Offerta: number;
}
export interface Dipendente {
  ID_Dipendente: number;
  ID_Azienda: number;
  Nome_Dipendente: string;
  Cognome_Dipendente: string;
  Posizione: string;
  Telefono_Dipendente: string;
  Email_Dipendente: string;
}
export interface Lavorazione {
  ID_Cliente: number;
  ID_Dipendente: number;
  ID_Lavorazione: number;
  ID_Offerta: number;
  Descrizione_Lavorazione: string;
  Data_Inizio: string;
  Data_Fine: string;
  Stato_Lavorazione: string;
}
export interface ServizioVenduto {
  ID_Servizio: number;
  ID_Offerta: number;
  Descrizione_Servizio: string;
  Quantità: number;
  Prezzo_Unitario: number;
  Prezzo_Totale: number;
}
export interface ReferenteCliente {
  ID_Referente: number;
  ID_Cliente: number;
  Nome_Referente: string;
  Cognome_Referente: string;
  Telefono_Referente: string;
  Email_Referente: string;
}
