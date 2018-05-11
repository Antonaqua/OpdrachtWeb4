import { Pipe, PipeTransform } from '@angular/core';
import { Deck } from './deck/deck.model';

@Pipe({
  name: 'deckFilter'
})
export class DeckFilterPipe implements PipeTransform {

  transform(decks: Deck[], name: string): Deck[] {
    return decks.filter(deck =>
    deck.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase())
    );
  }

}
