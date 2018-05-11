import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DeckComponent } from './deck/deck.component';
import { CardComponent } from './card/card.component';
import { AddDeckComponent } from './add-deck/add-deck.component';
import { DeckFilterPipe } from './deck-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    CardComponent,
    AddDeckComponent,
    DeckFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
