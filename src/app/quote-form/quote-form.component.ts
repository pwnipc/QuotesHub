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
  @Output() cancel = new EventEmitter<boolean>();

  newQuote = new Quote(0,"","","","",new Date())

  addQuote() {
    this.injectQuote.emit(this.newQuote);
  }

  cancelQuote(status:boolean){
    this.cancel.emit(status);
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
