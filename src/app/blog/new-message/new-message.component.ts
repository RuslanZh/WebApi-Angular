import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Message } from '../models/message';

@Component({
  selector: 'myblog-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  @Output() createMessageHandler = new EventEmitter<Message>();
  blogFormNewMessage: FormGroup;

  public isCreating = false;
  public message: Message = new Message();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.blogFormNewMessage = this.fb.group({
      author: ['', Validators.required],
      text: ['', Validators.required]
   });
  }

  ngOnInit() {
  }

  public createMessage(message) {
    this.isCreating = true;
    this.createMessageHandler.emit({...message});
    console.log(message);
    this.isCreating = false;
  }
}
