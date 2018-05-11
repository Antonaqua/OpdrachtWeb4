import { Component, OnInit, Input } from '@angular/core';
import {Deck} from './deck.model';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit{
  @Input() public deck: Deck;

  constructor() { 
  }

  ngOnInit() {}

}
