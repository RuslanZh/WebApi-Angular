export class Message {
    id: number;
    author: string;
    title: string;
    text: string;

    constructor( message: Object = {} ) {
      Object.assign(this, message);
    }
 }
