import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo-model';
import { concatAll, map, take, tap, toArray } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TodoService {
  todos: Todo[] = [];
  currentTodo$: Subject<Todo> = new Subject();

  constructor(private readonly http: HttpClient) {}

  /**
   * getByID restitusce observable di chiamata http per ottenere singolo Todo
   * @param id chiave identificativa del todo
   * @returns Observable con Todo richiesto
   */
  getByID(id: number): Observable<Todo> {
    // ---------------------------------------------
    // solo in caso dati lista sono completi, cambiando tipo restituito da metodo
    // ---------------------------------------------
    // return this.todos.find((item) => item.id === id);

    return this.http.get<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }

  /**
   * retriveTodoByID effettua chiamata a server e valorizza Subject che rappresenta il current Todo
   * @param id chiave identificativa del todo
   */
  retriveTodoByID(id: number): void {
    this.http
      .get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe((res) => this.currentTodo$.next(res));
  }

  /**
   * getTodos effettua chiamata a server e restituisce observable di lista todo
   * @returns Observable lista todo
   */
  getTodos(): Observable<Todo[]> {
    // -----------------------------------------
    // esempio trasformazione json data in classi
    // -----------------------------------------
    // this.http
    //   .get<any[]>('https://jsonplaceholder.typicode.com/todos')
    //   .pipe(
    //     concatAll(),
    //     take(5),
    //     tap((data) => console.log(data)),
    //     map((data) => {
    //       return new Todo(data.id, data.title, data.completed);
    //     }),
    //     tap((data) => console.log(data)),
    //     toArray()
    //   )
    //   .subscribe((data) => {
    //     console.log('getTodos chiamata completa');
    //     this.todos = data;
    //   });

    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        // filtro solo item non completi mantenendo oggetto di tipo observable
        map((items) => {
          return items.filter((item) => !item.completed);
        })
      );
    // .subscribe((data) => {
    //   this.todos = data;
    // });
  }
  /**
   * retriveTodos effettua chiamata a server e valorizza lista esposta da service
   * @returns Observable lista todo
   */
  retriveTodos(): void {
    this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data) => {
        this.todos = data;
      });
  }
}
