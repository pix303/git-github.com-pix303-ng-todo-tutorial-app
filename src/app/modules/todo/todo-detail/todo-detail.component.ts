import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoModel } from '../todo-model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  // @Input() -- gestione con componenti istanziati nello stesso comp parent
  currentTodo?: TodoModel = {
    title: 'vuoto',
    id: 0,
    completed: false,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private srv: TodoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        const candidateId = parseInt(params.get('id') ?? '-1');
        this.currentTodo = this.srv.getByID(candidateId);
      },
      (err) => console.log(err),
      () => console.log('è completo')
    );
  }
}
