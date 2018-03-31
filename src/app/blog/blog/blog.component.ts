import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'myblog-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    public messages: object[] = [
      {
        text: 'Message one',
        author: 'Ruslan'
      },
      {
        text: 'Message two',
        author: 'Ruslan'
      }
    ];

  constructor() {
    // private http: HttpClient
  }

  ngOnInit() {
    // this.http
    //   .get('https://dog.ceo/api/breeds/list/all')
    //   .subscribe(data => {
    //     console.log(data);
    //     // this.messages = data;
    //   });
  }

  // public onCreateMessage(message: Message) {
  //   this.messages.push(message);
  //   console.log(this.messages);
  // }
}
