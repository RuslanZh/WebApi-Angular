import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { List } from 'immutable';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'myblog-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [ ]
})
export class MessagesComponent implements OnInit {
  @Input() messages: List<Message>;

  constructor() {
  }

  ngOnInit() {
  }
}
