import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Deck } from '../deck/deck.model';

@Component({
  selector: 'app-add-deck',
  templateUrl: './add-deck.component.html',
  styleUrls: ['./add-deck.component.css']
})
export class AddDeckComponent implements OnInit {
  @Output() public newDeck = new EventEmitter<Deck>();

  constructor() { }

  ngOnInit() {
  }

  addDeck(newDeckName: HTMLInputElement) : boolean {
    const deck = new Deck(newDeckName.value);
    this.newDeck.emit(deck);
    return false;
  }

}
