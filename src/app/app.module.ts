import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from "./quote-form/quote-form.Component";
import { DateAgoPipe } from './dateAgo.pipe';
import { QDetailsComponent } from './q-details/q-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent,
    DateAgoPipe,
    QDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
