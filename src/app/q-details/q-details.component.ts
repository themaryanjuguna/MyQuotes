import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-q-details',
  templateUrl: './q-details.component.html',
  styleUrls: ['./q-details.component.css']
})
export class QDetailsComponent implements OnInit {

  @Input() quotes!: Quotes

  constructor() { }

  ngOnInit(): void {
  }

}
