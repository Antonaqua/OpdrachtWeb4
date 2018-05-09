import { Component } from '@angular/core';
import { DeckDataService } from './deck-data.service';
import { Deck } from './deck/deck.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DeckDataService]
})
export class AppComponent {
  title = 'app';

  constructor(private _deckDataService : DeckDataService) {
  }

  get decks() : Deck[] {
    return this._deckDataService.decks;
  }

  newDeckAdded(deck) {
    this._deckDataService.addNewDeck(deck);
  }
}
