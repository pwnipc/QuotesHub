import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css']
})
export class ListQuotesComponent implements OnInit {
  peep:boolean = false;
  mostVote : number = 0;
  master! : number;

  quotes: Quote[] = [
    new Quote(4,"Infinity","Albert Einstein","Genius","Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",new Date(1950,8,14)),
    new Quote(1,"The Office","Michael Scott","Chalie","i am not superstitious just a little stitious",new Date(2020,2,20)),
    new Quote(2, "Life", "Elbert Hubbard", "Wizz","do not take life too seriously. you will never get out of it alive",new Date(2019,3,5)),
    new Quote(3,"Understanding", "Albert Einstein", "Stupid", "If you can't explain it simply, you don't understand it well enough. ",new Date(1920,4,21)),
    new Quote(5,"Problem","Albert Einstein","Mkuu","We cannot solve our problems with the same thinking we used when we created them.",new Date(1954,2,4))
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


  deleteQuote(index:number){  
    alert("Delete Permanently?");
    this.quotes.splice(index, 1);
  }

  addQuote(theQuote:Quote){
    this.quotes.push(theQuote)
    this.peep = false;

  }

  twendekazi(){
    this.peep = !this.peep;
  }

  masterUpvote(){
    for(let i = 0; i < this.quotes.length; i++ ){
      if(this.quotes[i].qupvote > this.mostVote){
        this.mostVote = this.quotes[i].qupvote;
        this.master = i;
        this.quotes[i].highestVote = true;
        console.log(this.quotes[i].highestVote)       
        console.log(this.quotes[i - 1].highestVote)
      }else{  
        this.quotes[i].highestVote = false;      
      }

    }
  }

  cancel(status:boolean){
    this.peep = status;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
