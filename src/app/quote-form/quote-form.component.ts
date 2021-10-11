import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() injectQuote = new EventEmitter<Quote>();

  newQuote = new Quote(0,"","","","",new Date())

  addQuote() {
    this.injectQuote.emit(this.newQuote);
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
