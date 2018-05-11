export class Deck {
    private _name: string;
    private _cards = new Array<string>();
  
    constructor(name : string) { 
      this._name = name;
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
}