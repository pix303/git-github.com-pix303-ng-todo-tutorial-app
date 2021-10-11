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
  completed: boolean;
  userId?: number;
  user?: unknown;
}
