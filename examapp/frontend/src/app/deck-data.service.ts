import { Injectable } from '@angular/core';
import { Deck} from './deck/deck.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class DeckDataService {
  private readonly _appUrl = '/API/decks/';

  constructor(private http: HttpClient) { 
  }

  get decks(): Observable<Deck[]> {
    return this.http
      .get(this._appUrl)
      .pipe(
        map((list: any[]): Deck[] =>
          list.map(item => 
            new Deck(item.name, item.created)
          )
        )
      );
  }

  addNewDeck(deck : Deck) : Observable<Deck>{
    return this.http
      .post(this._appUrl, deck)
      .pipe(
      map(
        (item: any): Deck =>
          new Deck(item.name, item.created)
      )
    );
  }

}
