import { Message } from '../models/message';
import { List } from 'immutable';

export interface BlogState {
  messagesState: MessagesState;
}

export interface MessagesState {
  messages: List<Message>;
}

const messagesState: MessagesState = {
  messages: List<Message>([
    new Message({
      id: 1,
      title: 'Title 1',
      text: 'Message 1',
      author: 'Ruslan'
    }),
    new Message({
      id: 2,
      title: 'Title 2',
      text: 'Message 2',
      author: 'Ruslan'
    }),
    new Message({
      id: 3,
      title: 'Title 3',
      text: 'Message 3',
      author: 'Ruslan'
    }),
    new Message({
      id: 4,
      title: 'Title 4',
      text: 'Message 4',
      author: 'Ruslan'
    })
  ])
};

export const initialBlogState: BlogState = {
  messagesState: messagesState
};
