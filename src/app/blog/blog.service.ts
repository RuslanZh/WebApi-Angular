import { Injectable } from '@angular/core';
import { Message } from './models/message';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { List } from 'immutable';
import 'rxjs/add/observable/empty';
import { MessageRepositoryService } from './message-repository.service';
// test
import { Http, Response } from '@angular/http';

@Injectable()
export class BlogService {
  private _messages: BehaviorSubject<List<Message>> = new BehaviorSubject(List([]));
  public readonly messages: Observable<List<Message>> = this._messages.asObservable().share();
  // get messages(): Observable<List<Message>> {
  //   return this._messages.asObservable();
  // }

  constructor(private messageRepositoryService: MessageRepositoryService) {
    // this.messages.subscribe((messages: List<Message>) => {
    //   console.log(2);
    //   console.log(messages);
    //   console.log(this.messages);
    // });
  }

  getAllMessage(): Observable<List<Message>> {console.log(10);
    const obsMessages: Observable<List<Message>> = this.messageRepositoryService.getAllMessage();
    obsMessages.subscribe((messages: List<Message>) => {
          this._messages.next(List(messages));
        },
        (err) => console.log('Error retrieving Messages')
      );

    return obsMessages;
  }

  getMessageById(messageId: number): Observable<any> {
    const obsMessage: Observable<Message> = this.messageRepositoryService.getMessageById(messageId);

    return obsMessage;
  }

  addMessage(newMessage: Message): Observable<Message> {
    if (!newMessage.title) {
      return Observable.empty<Message>().share();
    }

    const obsMessage: Observable<Message> = this.messageRepositoryService.addMessage(newMessage);

    obsMessage.subscribe((message) => {
        this._messages.next(this._messages.getValue().push(message));
      },
      () => console.log('error')
    );

    return obsMessage;
  }

  deleteMessageById(messageId: number): Observable<any> {
    const obs: Observable<any> = this.messageRepositoryService.deleteMessageById(messageId);

    obs.subscribe((status) => {
        if (!status) {
          return;
        }
        const messages: List<Message> = this._messages.getValue();
        const index = messages.findIndex((message) => message.id === messageId);
        if (index < 0) {
          return;
        }
        this._messages.next(messages.remove(index));
      },
      () => console.log('error')
    );

    return obs;
  }

  updateMessageById(messageUpdated: Message): Observable<Message> {
    if (!messageUpdated.id && !messageUpdated.title) {
      return;
    }

    const obsMessage: Observable<Message> = this.messageRepositoryService.updateMessage(messageUpdated);

    obsMessage.subscribe((message) => {
        const messages: List<Message> = this._messages.getValue();
        const index = messages.findIndex((m) => m.id === messageUpdated.id);
        messages[index] = message;
        this._messages.next(messages);
      },
      () => console.log('error')
    );

    return obsMessage;
  }
}
