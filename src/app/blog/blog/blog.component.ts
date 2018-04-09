import { Store, select } from '@ngrx/store';
import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Message } from '../models/message';
import { BlogService } from '../blog.service';
import { List } from 'immutable';
import { componentDestroyed } from 'ng2-rx-componentdestroyed';
import 'rxjs/add/operator/takeUntil';
import { BlogState, MessagesState, initialBlogState } from '../store/blog.state';
// import { messagesReducer } from '../store/reducers/blog.reducer';
import * as fromStore from '../store';
import * as blogActions from '../store/actions/blog.actions';

@Component({
  selector: 'myblog-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy  {
  public messages: List<Message> = List<Message>();

  constructor(private blogService: BlogService, private store: Store<fromStore.BlogState>) {
    // const blogFeatureState = blogStore.select<any>('blogFeature')
    //   .subscribe((blogFeature: any) => {
    //     const blogState: BlogState = blogFeature.blog;
    //     this.messages = blogState.messagesState.messages;
    //   });
    // this.store.select('blog').subscribe((m) => console.log(m));
    this.store.select(fromStore.getAllMessagesState).subscribe((m) => {
      console.log(m);
      this.messages = m;
    });
    // console.log(messages);
    // console.log(messages);
    // messages.subscribe((m) => console.log(m));
    // messagesState.subscribe((mState) => {
    //   console.log(mState);
    // });
  }

  ngOnInit() {
    // this.blogService.messages
    //   .takeUntil(componentDestroyed(this))
    //   .subscribe((messages) => {
    //   console.log(messages);
    //   this.messages = messages;
    // });
    //
    // this.blogService.getAllMessage();
  }

  ngOnDestroy(): void {
  }

  // public onCreateMessage(message: Message) {
  //   this.messages.push(message);
  //   console.log(this.messages);
  // }
}
