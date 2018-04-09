import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { HttpModule } from '@angular/http';
import { MessageRepositoryService } from './message-repository.service';
import { BlogService } from './blog.service';
// import { messagesReducer } from './store/reducers/blog.reducer';
import { reducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    StoreModule.forFeature('blog', reducers),
    // StoreModule.forFeature('blog', {
    //   blog: reducers
    // })
  ],
  providers: [ MessageRepositoryService, BlogService ],
  declarations: [BlogComponent, MessageComponent, MessagesComponent, NewMessageComponent],
  exports: [BlogComponent]
})
export class BlogModule { }
