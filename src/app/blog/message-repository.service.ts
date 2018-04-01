import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Message} from './models/message';
import { List } from 'immutable';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class MessageRepositoryService {
  private readonly apiPath: string;
  constructor(private http: Http) {
    this.apiPath = 'http://localhost:4201';
  }

  getAllMessage(): Observable<List<Message>> {
    return this.http.get(`${this.apiPath}/messages`)
      .map((res: Response) => {
        const response = res.json();
        if (!response.status) {
          return List([]);
        }

        const messages = (<Object[]>response.data).map((message: any) => {
          return new Message({...message});
        });

        return List(messages);
      })
      .share();
  }

  getMessageById(messageId: number): Observable<Message> {
    return this.http.get(`${this.apiPath}/messages/${messageId}`).map((res: Response) => {
      const response = res.json();
      if (!response.status) {
        return null;
      }

      return new Message({...response.data});
    }).share();
  }

  addMessage(newMessage: Message): Observable<Message> {
    if (!newMessage.title) {
      return;
    }

    return this.http.post(`${this.apiPath}/messages`, newMessage)
              .map((res: Response) => {
                const response = res.json();
                if (!response.status) {
                  return null;
                }

                return new Message({...response.data});
              })
              .share();
  }

  updateMessage(updatedMessage: Message): Observable<Message> {
    if (!updatedMessage.id || !updatedMessage.title) {
      return;
    }

    return this.http.put(`${this.apiPath}/messages/${updatedMessage.id}`, updatedMessage)
      .map((res: Response) => {
        const response = res.json();
        if (!response.status) {
          return null;
        }

        return new Message({...response.data});
      })
      .share();
  }

  deleteMessageById(messageId: number): Observable<void> {
    return this.http.delete(`${this.apiPath}/messages/${messageId}`)
      .map((res: Response) => {
        const response = res.json();
        if (!response.status) {
          return null;
        }
      })
      .share();
  }
}
