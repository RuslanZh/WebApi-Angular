import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [BlogComponent, MessageComponent, MessagesComponent, NewMessageComponent],
  exports: [BlogComponent]
})
export class BlogModule { }
