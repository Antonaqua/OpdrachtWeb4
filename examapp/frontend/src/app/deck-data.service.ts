import { Injectable } from '@angular/core';
import { Deck} from './deck/deck.model';

@Injectable()
export class DeckDataService {
  private _decks = new Array<Deck>();

  constructor() { 
    let deck1 = new Deck("Red Deck Wins");
    let deck2 = new Deck ("UB Cancer");

    deck1.addCard("Hazoret The Fervent");
    deck1.addCard("Ramunap Ruins");
    deck1.addCard("Rekindling Phoenix");

    deck2.addCard("The Scarab God");
    deck2.addCard("Fetid Pools");
    deck2.addCard("Vraska's Contempt");
    
    this._decks.push(deck1);
    this._decks.push(deck2);
  }

  get decks() : Deck[] {
    return this._decks;
  }

  addNewDeck(deck : Deck) {
    this._decks = [...this._decks, deck];
  }

}
