import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quotes } from '../quotes';




@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']

})
export class QuoteComponent implements OnInit {
  @Input() quote!: Quotes;
  @Output() isComplete = new EventEmitter<Quotes>();



  quotes= [
    new Quotes(1, 'Huey Freeman', 'Maryanne', 'Being the bigger man is overrated.', new Date(8,2,2004)),
    new Quotes(2, 'Earthgirl, The Incredibles.', 'Maryanne', 'Your identity is your most valuable possession. Protect it.', new Date(4,5,2009)),
    new Quotes(3, 'Eeyore', 'Maryanne', 'A little consideration, a little thought for others, makes all the difference', new Date(3,1,2009)),


    // {id:1, author:'Flinstones',publisher:'Maryanne',quote:'yaba daba doo',},
    // {id:2,author:'Scoobie Doo',publisher:'Maryanne',quote:'scoobie doobie do'},
    // {id:3,author:'Messi',publisher:'Maryanne',quote:'bala bala boom boom'},
  ];


  mostCount!: number;
  leastCount!:number
  counter!: number;

  addNewQuote(quote: Quotes) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote);
  }

  // deleteQuote(){
  //   this['isComplete'].emit();
  // }


  [x: string]: any;

  numberOfLikes: number = 0;

  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfLikes--;
  }
  deleteQuote(i: number) {
    this.quotes.splice(i, 1)
  }

  highestUpvote(){
    this.mostCount = 0
    this.leastCount = 0

  

    
  }


  



  constructor() { }

  ngOnInit(): void {
  }

}
