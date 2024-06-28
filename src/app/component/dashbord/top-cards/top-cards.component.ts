import { Component, OnInit } from '@angular/core';
import {topcard,topcards} from './top-cards-data';

@Component({
  selector: 'app-top-cards',
  standalone: true,
  imports:[],
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  topcards:topcard[];

  constructor() { 

    this.topcards=topcards;
  }

  ngOnInit(): void {
  }

}
