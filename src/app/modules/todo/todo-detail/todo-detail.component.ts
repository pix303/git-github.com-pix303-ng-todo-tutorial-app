import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from '../todo-model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  @Input() currentTodo: TodoModel = { title: 'vuoto', id: 0, completed: false };

  constructor() { }

  ngOnInit(): void {
  }

}
