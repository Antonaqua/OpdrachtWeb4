export class Deck {
    private _name: string;
    private _cards = new Array<string>();
    private _dateAdded: Date;
  
    constructor(name : string, cards: string[] = [], dateAdded: Date = null) { 
      this._name = name;
      this._cards = cards;
      this._dateAdded = dateAdded ? dateAdded : new Date();
    }
  
    get name() : string {
      return this._name;
    }
  
    addCard(name : string) {
        this._cards.push(name);
    }
    
    get cards() : Array<string> {
      return this._cards;
    }

    toJSON() {
      return {
        name: this._name,
        cards: this._cards,
        created: this._dateAdded
      }
    }
}