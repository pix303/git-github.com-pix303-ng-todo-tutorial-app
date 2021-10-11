import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../todo-model';
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

  // proprietà valorizzata dal subscribe di obs del service
  todos: Todo[] = [];
  // proprietà usata direttamente in template html con pipe async
  todos$: Observable<Todo[]> = new Observable();

  constructor(
    public srv: TodoService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // valorizzo todos con risultato del subscribe
    this.srv.getTodos().subscribe((res) => (this.todos = res));
    // valorizzo observable che uso poi in template
    this.todos$ = this.srv.getTodos();

    // metodo alternativo con trigger richiesta lato server
    // e consumo variabile srv.todos direttamente in template html
    this.srv.retriveTodos();
  }

  onItemSelected(id: number): void {
    // ------------------------------------
    // gestione output con event emitter
    // ------------------------------------
    // const candidateItem = this.srv.todos.find((item) => item.id === id);
    // this.todoSelected.next(candidateItem);

    // navigazione alternativa a [routerLink]
    this.router.navigate(['../', 'detail', id], {
      relativeTo: this.activatedRoute,
    });
  }
}
