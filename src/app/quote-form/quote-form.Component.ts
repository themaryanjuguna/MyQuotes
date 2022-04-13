import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { Quotes } from '../quotes';




@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quotes(0, "", "","", new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

  form: any;
  quoteForm: any;

  submitGoal() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes(0, "", "","", new Date());

  }
  
  
  constructor() { }

  ngOnInit(): void {

    this.form = this.quoteForm({
      quoteArea: [null, [Validators.required]],
      author: [null, [Validators.required]],
      publisher: [null, [Validators.required]],
  })
  }

}
