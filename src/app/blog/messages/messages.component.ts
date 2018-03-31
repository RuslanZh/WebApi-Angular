import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { BlogService } from '../blog.service';
import { List } from 'immutable';

@Component({
  selector: 'myblog-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [ BlogService ]
})
export class MessagesComponent implements OnInit {
  @Input() messages: List<Message>;

  constructor(private blogService: BlogService) {
    this.messages = this.blogService.getAllMessage();
  }

  ngOnInit() {
  }

  removeMessage(message: Message) {
    this.blogService.deleteMessageById(message.id);
  }
}
