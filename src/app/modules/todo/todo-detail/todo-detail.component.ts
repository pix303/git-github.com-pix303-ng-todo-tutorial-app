import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo-model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  // @Input() -- gestione con componenti istanziati nello stesso parent component
  currentTodo: Todo = {
    title: 'vuoto',
    id: 0,
    completed: false,
  };

  currentDate = new Date();

  @ViewChild('todoForm', { static: true }) todoForm: NgForm;

  constructor(
    private activatedRoute: ActivatedRoute,
    public srv: TodoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        const candidateId = parseInt(params.get('id') ?? '-1');
        // scateno la chiamata al server
        this.srv.retriveTodoByID(candidateId);
        // valorizzo valore di prop interna con risultato subscribe
        // vedi template html per utilizzo observable srv.currentTodo$ direttamente in template
        this.srv.currentTodo$.subscribe((item) => (this.currentTodo = item));
      },
      (err) => console.log(err),
      () => console.log('è completo')
    );

    this.todoForm.valueChanges?.subscribe((res) => console.log(res));
    this.todoForm.statusChanges?.subscribe((res) => console.log(res));
  }

  onSubmit(): void {
    this.currentTodo.title = this.todoForm.value.title;
    this.currentTodo.completed = this.todoForm.value.done;
  }
}
