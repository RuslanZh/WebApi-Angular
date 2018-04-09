import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Message } from '../models/message';
import { BlogService } from '../blog.service';
import { List } from 'immutable';
import { componentDestroyed } from 'ng2-rx-componentdestroyed';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'myblog-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy  {
  public messages: List<Message> = List<Message>();

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogService.messages
      .takeUntil(componentDestroyed(this))
      .subscribe((messages) => {
      console.log(messages);
      this.messages = messages;
    });

    this.blogService.getAllMessage();
  }

  ngOnDestroy(): void {
  }

  // public onCreateMessage(message: Message) {
  //   this.messages.push(message);
  //   console.log(this.messages);
  // }
}
