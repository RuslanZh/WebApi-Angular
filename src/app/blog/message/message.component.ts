import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { Message } from '../models/message';
import {BlogService} from '../blog.service';
import { componentDestroyed } from 'ng2-rx-componentdestroyed';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'myblog-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [ ]
})
export class MessageComponent implements OnInit, OnDestroy {
  @Input() message: Message;
  // @Output() removeMessageHandler = new EventEmitter<Message>();

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
  // public removeMessage(message: Message) {
  //
  //   this.removeMessageHandler.emit(message);
  // }

  public removeMessage(message: Message) {
    this.blogService.deleteMessageById(message.id)
      .takeUntil(componentDestroyed(this));
  }
}
