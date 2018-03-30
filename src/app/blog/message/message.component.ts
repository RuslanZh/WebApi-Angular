import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Message } from '../models/message';
import {BlogService} from '../blog.service';

@Component({
  selector: 'myblog-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [ BlogService ]
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Output() removeMessageHandler = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() {
  }

  public removeMessage(message: Message) {
    this.removeMessageHandler.emit(message);
  }
}
