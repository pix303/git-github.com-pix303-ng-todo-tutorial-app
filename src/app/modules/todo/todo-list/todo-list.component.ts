import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoModel } from '../todo-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[] = [
    { id: 1, title: 'fare la spesa', completed: false },
    { id: 2, title: 'fare il bravo', completed: false },
    { id: 3, title: 'fare tutto', completed: false },
    { id: 4, title: 'fare niente', completed: true },
  ];

  @Output() todoSelected: EventEmitter<TodoModel> =
    new EventEmitter<TodoModel>();

  constructor() {}

  ngOnInit(): void {}

  onItemSelected(id: number): void {
    const candidateItem = this.todos.find((item) => item.id === id);
    this.todoSelected.next(candidateItem);
  }
}
