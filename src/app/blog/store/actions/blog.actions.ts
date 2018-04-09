import { Action } from '@ngrx/store';
import { Message } from '../../models/message';

export const SELECT_ALL = '[Messages] Select All';
// export const SELECT = '[Messages] Select';
export const ADD_ONE = '[Messages] Add One';

export class SelectAll implements Action {
  readonly type = SELECT_ALL;
  constructor() { }
}

// export class Select implements Action {
//   readonly type = SELECT;
//   constructor(public payload: number) { }
// }

export class AddOne implements Action {
  readonly type = ADD_ONE;
  constructor(public payload: Message) { }
}

export type Action = AddOne | SelectAll;
