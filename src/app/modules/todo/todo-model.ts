// export class Todo {
//   constructor(
//     public id: number,
//     public title: string,
//     public completed: boolean,
//     public userId?: number,
//     public user?: unknown
//   ) {}
// }

export interface Todo {
  id: number;
  title: string;
  done?: boolean;
  userCode?: number;
  user?: unknown;
}
export interface ServerTodo {
  id: number;
  title: string;
  completed?: boolean;
  userId?: number;
}

export interface TodoServer extends Todo {
  completed?: boolean;
  userId?: number;
}
