import { Component } from '@angular/core';
import { Todo } from './modules/todo/todo-model';
import { TodoModule } from './modules/todo/todo.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-app';

  // ------------------------------------
  // gestione con compomenti Todo istanziati in template app component
  // ------------------------------------
  //
  // currentTodo: TodoModel = { id: 1, title: 'test', completed: false };

  // onTodoSelected(item: TodoModel): void {
  //   this.currentTodo = item;
  // }
  // --------------------------------
}
