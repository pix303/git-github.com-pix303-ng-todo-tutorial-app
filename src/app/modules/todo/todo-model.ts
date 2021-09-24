export class TodoModel {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean,
    public userId?: number,
  ) { }


}
