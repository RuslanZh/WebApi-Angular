import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { BlogService } from '../blog.service';

@Component({
  selector: 'myblog-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [ BlogService ]
})
export class MessagesComponent implements OnInit {
  @Input() messages: Message[];

  constructor(private blogService: BlogService) {
    this.messages = this.blogService.getAllMessage();
  }

  ngOnInit() {
  }

  removeMessage(message: Message) {
    this.blogService.deleteMessageById(message.id);
  }
}
