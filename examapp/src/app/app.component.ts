import { Component } from '@angular/core';
import { Deck } from './deck/deck.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private _decks = new Array<Deck>();

  constructor() {
    const deck1 = new Deck("Red Deck Wins");
    const deck2 = new Deck ("UB Cancer");

    deck1.addCard("Hazoret The Fervent");
    deck1.addCard("Ramunap Ruins");
    deck1.addCard("Rekindling Phoenix");

    deck2.addCard("The Scarab God");
    deck2.addCard("Fetid Pools");
    deck2.addCard("Vraska's Contempt");
    
    this._decks.push(deck1);
    this._decks.push(deck2);
  }

  newDeckAdded(deck) {
    this._decks.push(deck);
  }
}
