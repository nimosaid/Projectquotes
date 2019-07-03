import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class quotesDetailsComponent implements OnInit {

  votes: number;

 @Input () quote:quotes;
 vote = 0;

 constructor() {
   this.votes = 0;
  }

  likeVote(): boolean{
    this.votes +=1;
    return false;
  }

  dislikeVote(): boolean{
   this.votes -=1;
   return false;
 }


  ngOnInit() {
  }

}
