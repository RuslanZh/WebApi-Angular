import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Message } from '../models/message';
import {Observable} from 'rxjs/Observable';
import {BlogService} from '../blog.service';

@Component({
  selector: 'myblog-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  // @Output() createMessageHandler = new EventEmitter<Message>();
  public blogFormNewMessage: FormGroup;
  public isCreating = false;
  public message: Message = new Message();

  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.createForm();
  }

  private createForm() {
    this.blogFormNewMessage = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      text: ['', Validators.required]
   });
  }

  ngOnInit() {
  }

  public createMessage(message) {
    if (!message.title) {
      return Observable.empty<Message>().share();
    }

    this.isCreating = true;
    this.blogService.addMessage(message);
    // this.createMessageHandler.emit({...message});
    this.isCreating = false;
    console.log(message);
  }
}
