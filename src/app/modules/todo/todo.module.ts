import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent],
  imports: [
    CommonModule, MatListModule, MatIconModule
  ],
  exports: [TodoListComponent, TodoDetailComponent]
})
export class TodoModule { }
