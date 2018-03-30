import { Injectable } from '@angular/core';
import { Message } from './models/message';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { List } from 'immutable';
import { Http, Response } from '@angular/http';
import { MessageRepositoryService } from './message-repository.service';

@Injectable()
export class BlogService {
  private _messages: BehaviorSubject<List<Message>> = new BehaviorSubject(List([]));
  public readonly messages: Observable<List<Message>> = this._messages.asObservable();

  constructor(private messageRepositoryService: MessageRepositoryService) {
    messageRepositoryService.getAllMessage()
      .subscribe((messages: List<Message>) => {
          this._messages.next(List(messages));
        },
        (err) => console.log('Error retrieving Messages')
      );
  }

  getAllMessage(): List<Message> {
    return this._messages.getValue();
  }

  getMessageById(messageId: number): Message {
    return this._messages.getValue().find((message) => message.id === messageId);
  }

  addMessage(newMessage: Message): Observable<any> {
    if (!newMessage.title) {
      return;
    }

    const obs: Observable<any> = this.messageRepositoryService.addMessage(newMessage);

    obs.subscribe(() => {
        this._messages.next(this._messages.getValue().push(newMessage));
      },
      () => console.log('error')
    );

    return obs;
  }

  deleteMessageById(messageId: number): Observable<any> {
    const obs: Observable<any> = this.messageRepositoryService.deleteMessageById(messageId);

    obs.subscribe((res) => {
        const messages: List<Message> = this._messages.getValue();
        const index = messages.findIndex((message) => message.id === messageId);
        this._messages.next(messages.delete(index));
      },
      () => console.log('error')
    );

    return obs;
  }

  updateMessageById(messageUpdated: Message): Observable<any> {
    if (!messageUpdated.id && !messageUpdated.title) {
      return;
    }

    const obs: Observable<any> = this.messageRepositoryService.updateMessage(messageUpdated);

    obs.subscribe((res) => {
        const messages: List<Message> = this._messages.getValue();
        const index = messages.findIndex((message) => message.id === messageUpdated.id);
        messages[index] = messageUpdated;
        this._messages.next(messages);
      },
      () => console.log('error')
    );

    return obs;
  }
}
