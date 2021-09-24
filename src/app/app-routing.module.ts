import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailComponent } from './modules/todo/todo-detail/todo-detail.component';
import { TodoListComponent } from './modules/todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: 'list', component: TodoListComponent },
  { path: 'detail/:id', component: TodoDetailComponent },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
