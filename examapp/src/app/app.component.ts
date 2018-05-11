import { Deck } from './deck/deck.model';
import { Component } from '@angular/core';
import { DeckDataService } from './deck-data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { distinctUntilChanged } from 'rxjs/operators';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DeckDataService]
})
export class AppComponent {
  public filterDeckName$ = new BehaviorSubject<string>('');
  public filterDeck$ = new BehaviorSubject<string>('');

  constructor(private _deckDataService: DeckDataService) {
    this.filterDeckName$
      .debounceTime(400)
      .distinctUntilChanged()
      .map(val => val.toLowerCase())
      // .filter(val => !val.startsWith('s'))
      .subscribe(val => this.filterDeck$.next(val));
  }

  get decks(): Deck[] {
    return this._deckDataService.decks;
  }

  newDeckAdded(deck) {
    this._deckDataService.addNewDeck(deck);
  }
}
