import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListQuotesComponent } from './list-quotes/list-quotes.component';
import { QuoteDescriptionComponent } from './quote-description/quote-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ListQuotesComponent,
    QuoteDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
