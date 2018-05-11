import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Deck } from '../deck/deck.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-deck',
  templateUrl: './add-deck.component.html',
  styleUrls: ['./add-deck.component.css']
})
export class AddDeckComponent implements OnInit {
  @Output() public newDeck = new EventEmitter<Deck>();

  constructor() { }

  private deck: FormGroup;

  ngOnInit() {
    this.deck = new FormGroup({
      name: new FormControl('RDW')
    })
  }

  addDeck(newDeckName: HTMLInputElement) : boolean {
    const deck = new Deck(newDeckName.value);
    this.newDeck.emit(deck);
    return false;
  }

}
