import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css']
})
export class ListQuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,"The Office","Michael Scott","Chalie","i am not superstitious just a little stitious",new Date(2020,2,20)),
    new Quote(2, "Life", "Elbert Hubbard", "Wizz","do not take life too seriously. you will never get out of it alive",new Date(2019,3,5))
  ];

  viewQuote(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;    
  }
  
  upvote(index:number){
    this.quotes[index].qupvote += 1;
  }

  downvote(index:number){
    this.quotes[index].qdownvote += 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
