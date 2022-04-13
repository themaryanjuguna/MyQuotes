import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {
  @Input() quote!: Quotes;
  @Output() isComplete = new EventEmitter<Quotes>();


  [x: string]: any;

  numberOfLikes : number = 0;

  likeButtonClick(){
    this.numberOfLikes++;
  }

  dislikeButtonClick(){
    this.numberOfLikes--;
  }

  
   deleteQuote(isComplete: any, index: number){
    if(isComplete){
    let toDelete = confirm(`Are you sure you want to delete ${this['quotes'][index].author} ?`);
    if (toDelete){
    this['quotes'].splice(index, 1)
  
      }
    }
  }
  }