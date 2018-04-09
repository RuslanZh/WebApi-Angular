import { Action } from '@ngrx/store';
import * as messagesAction from '../actions/blog.actions';
import { List } from 'immutable';
// import { BlogState, MessagesState, initialBlogState } from '../blog.state';
import { Message } from '../../models/message';

// export interface BlogState {
//   // messagesState: MessagesState;
//   messages: List<Message>;
// }
export interface BlogState {
  // messagesState: MessagesState;
  messages: Message[];
}

// export interface MessagesState {
//   messages: List<Message>;
// }

// const blogInitialState: BlogState = {
//   messages: List<Message>([
//     new Message({
//       id: 1,
//       title: 'Title 1',
//       text: 'Message 1',
//       author: 'Ruslan'
//     }),
//     new Message({
//       id: 2,
//       title: 'Title 2',
//       text: 'Message 2',
//       author: 'Ruslan'
//     }),
//     new Message({
//       id: 3,
//       title: 'Title 3',
//       text: 'Message 3',
//       author: 'Ruslan'
//     }),
//     new Message({
//       id: 4,
//       title: 'Title 4',
//       text: 'Message 4',
//       author: 'Ruslan'
//     })
//   ])
// };
const blogInitialState: BlogState = {
  messages: [
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
  ]
};


// const initialBlogState: BlogState = {
//   messagesState: messagesState
// };


export function blogReducer(state = blogInitialState, action: messagesAction.Action): BlogState {
  switch (action.type) {
    case messagesAction.ADD_ONE: {
      const newMessage: Message = action.payload;
      state.messages.push(newMessage);
      console.log({
        ...state,
          messages: [
            ...state.messages,
          ]
      });
      return {
        ...state,
          messages: [
            ...state.messages,
          ]
      };
    }
    // case messagesAction.SELECT: {
    //   const id = action.payload;
    //   return {
    //     ...state,
    //     selected: id
    //   };
    // }
    case messagesAction.SELECT_ALL: {
      console.log({
        ...state
      });
      return {
        ...state
      };
    }
    default:
      return state;
  }
}


export const getAllMessages = (state: BlogState) => List<Message>(state.messages);
// export const getRandomMealLoaded = (state: HomeState) => state.loaded;
// export const getRandomMealLoading = (state: HomeState) => state.loading;

