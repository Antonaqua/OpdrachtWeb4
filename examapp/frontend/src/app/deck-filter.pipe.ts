import { Pipe, PipeTransform } from '@angular/core';
import { Deck } from './deck/deck.model';
import { ReactiveFormsModule} from '@angular/forms';

@Pipe({
  name: 'deckFilter'
})
export class DeckFilterPipe implements PipeTransform {
  transform(decks: Deck[], name: string): Deck[] {
    if (!name || name.length === 0) {
      return decks;
    }
    return decks.filter(
      deck => deck.name && deck.name.toLowerCase().startsWith(name.toLowerCase())
    );
  }
}
