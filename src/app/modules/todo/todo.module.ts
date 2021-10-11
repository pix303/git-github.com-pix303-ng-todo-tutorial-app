import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { RouterModule } from '@angular/router';
import { TodoService } from './todo.service';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatListModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [TodoService],
})
export class TodoModule {}
