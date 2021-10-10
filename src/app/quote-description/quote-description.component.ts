import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-description',
  templateUrl: './quote-description.component.html',
  styleUrls: ['./quote-description.component.css']
})
export class QuoteDescriptionComponent implements OnInit {
  @Input() showDesc!: Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
