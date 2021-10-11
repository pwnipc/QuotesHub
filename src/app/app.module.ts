import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListQuotesComponent } from './list-quotes/list-quotes.component';
import { QuoteDescriptionComponent } from './quote-description/quote-description.component';
import { TimeAgoPipe } from './time-ago.pipe';
import { QuotehighlightDirective } from './quotehighlight.directive';
import { QuoteFormComponent } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListQuotesComponent,
    QuoteDescriptionComponent,
    TimeAgoPipe,
    QuotehighlightDirective,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
