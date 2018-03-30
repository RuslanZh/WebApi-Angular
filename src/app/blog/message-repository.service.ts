import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Message} from './models/message';
import { List } from 'immutable';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class MessageRepositoryService {

  constructor(private http: Http) { }
  // messages: Message[] = [
  //   new Message({
  //     id: 1,
  //     title: 'Title1',
  //     text: 'Text1',
  //     author: 'Author1'
  //   }),
  //   new Message({
  //     id: 2,
  //     title: 'Title2',
  //     text: 'Text2',
  //     author: 'Author2'
  //   }),
  //   new Message({
  //     id: 3,
  //     title: 'Title3',
  //     text: 'Text3',
  //     author: 'Author3'
  //   }),
  //   new Message({
  //     id: 4,
  //     title: 'Title4',
  //     text: 'Text4',
  //     author: 'Author4'
  //   }),
  //   new Message({
  //     id: 5,
  //     title: 'Title5',
  //     text: 'Text5',
  //     author: 'Author5'
  //   })
  // ];

  getAllMessage(): Observable<List<Message>> {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
      .map((res: Response) => {
        const messages = (<Object[]>res.json()).map((message: any) =>
          new Message({...message}));

        return List(messages);
      })
      .share();
  }

  getMessageById(messageId: number): Observable<Message> {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric=${messageId}`).map((res: Response) => {
      return new Message({...<Object>res.json()});
    }).share();
  }

  addMessage(newMessage: Message): Observable<void> {
    if (!newMessage.title) {
      return;
    }

    return this.http.post(`https://conduit.productionready.io/api/profiles/eric`, newMessage)
              .map((res: Response) => {})
              .share();
  }

  updateMessage(updatedMessage: Message): Observable<void> {
    if (!updatedMessage.id || !updatedMessage.title) {
      return;
    }

    return this.http.put(`https://conduit.productionready.io/api/profiles/eric=${updatedMessage.id}`, updatedMessage)
      .map((res: Response) => {})
      .share();
  }

  deleteMessageById(messageId: number): Observable<void> {
    return this.http.delete(`https://conduit.productionready.io/api/profiles/eric=${messageId}`)
      .map((res: Response) => {})
      .share();
  }
}
