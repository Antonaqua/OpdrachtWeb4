import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  name: string;
  cards: string[];
  constructor() { 
    this.name = "RDW";
    this.cards = ["Ramunap Ruins", "Ramunap Ruins", "Ramunap Ruins", "Ramunap Ruins", "Sunscorched Desert"];
  }

  ngOnInit() {
  }

}
