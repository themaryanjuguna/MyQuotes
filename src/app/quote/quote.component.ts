import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[] =[
    new Quotes(1,'Huey Freeman','Maryanne','Being the bigger man is overrated.', new Date),
    new Quotes(1,'Earthgirl, The Incredibles.','Maryanne','Your identity is your most valuable possession. Protect it.', new Date),
    new Quotes(1,'Eeyore','Maryanne','A little consideration, a little thought for others, makes all the difference', new Date),


    // {id:1, author:'Flinstones',publisher:'Maryanne',quote:'yaba daba doo',},
    // {id:2,author:'Scoobie Doo',publisher:'Maryanne',quote:'scoobie doobie do'},
    // {id:3,author:'Messi',publisher:'Maryanne',quote:'bala bala boom boom'},
  ];


  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)
  }

    completeGoal(isComplete:any, index:any){
      if (isComplete){
        this.quotes.splice(index,1);
      }
    }
   

  constructor() { }

  ngOnInit(): void {
  }

}
