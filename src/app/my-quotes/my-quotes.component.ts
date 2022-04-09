import { Component, OnInit } from '@angular/core';
import { MyQuotes } from '../my-quotes';


@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.component.html',
  styleUrls: ['./my-quotes.component.css']
})
export class MyQuotesComponent implements OnInit {

  myquotes:MyQuotes[] = [
    {id:1, author:'scoobie Doo',publisher:'Maryanne',quote:'Scoobie Doobie Doo'},
    {id:2,author:'Flinstones',publisher:'Maryanne',quote:'Yaba daba doo'},
    {id:3, author:'Dee Dee',publisher:'Maryanne',quote:'What does this button do'},
  ]   

  constructor() { }

  ngOnInit(): void {
  }

}
