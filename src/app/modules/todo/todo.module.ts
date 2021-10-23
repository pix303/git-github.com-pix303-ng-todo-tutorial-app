import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { RouterModule } from '@angular/router';
import { TodoService } from './todo.service';
import { TodoRoutingModule } from './todo-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  providers: [TodoService],
})
export class TodoModule {}
