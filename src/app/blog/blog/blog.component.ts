import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { BlogService } from '../blog.service';
import { List } from 'immutable';

@Component({
  selector: 'myblog-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public messages: List<Message> = List<Message>();

  constructor(private blogService: BlogService) {
    this.blogService.messages.subscribe((messages) => {
      console.log(messages);
      this.messages = messages;
    });

    this.blogService.getAllMessage();
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
