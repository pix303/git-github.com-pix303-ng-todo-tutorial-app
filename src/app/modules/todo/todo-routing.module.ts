import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'list', component: TodoListComponent },
  { path: 'detail/:id', component: TodoDetailComponent },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
