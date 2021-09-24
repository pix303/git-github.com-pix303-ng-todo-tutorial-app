import { Injectable } from '@angular/core';
import { TodoModel } from './todo-model';

export class TodoService {
  todos: TodoModel[] = [
    { id: 1, title: 'fare la spesa', completed: false },
    { id: 2, title: 'fare il bravo', completed: false },
    { id: 3, title: 'fare tutto', completed: false },
    { id: 4, title: 'fare niente', completed: true },
  ];
  constructor() {}

  getByID(id: number): TodoModel | undefined {
    return this.todos.find((item) => item.id === id);
  }
}
