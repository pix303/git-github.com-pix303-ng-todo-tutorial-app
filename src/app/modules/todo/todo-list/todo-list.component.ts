import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoModel } from '../todo-model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  // gestione ad eventi con componenti istianziati nello stesso componente parent
  // @Output() todoSelected: EventEmitter<TodoModel> =
  //   new EventEmitter<TodoModel>();

  constructor(public srv: TodoService) {}

  ngOnInit(): void {}

  onItemSelected(id: number): void {
    // const candidateItem = this.srv.todos.find((item) => item.id === id);
    // this.todoSelected.next(candidateItem);
  }
}
