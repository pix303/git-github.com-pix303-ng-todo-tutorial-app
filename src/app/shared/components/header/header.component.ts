import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name = 'ToDo App';
  mainColor = 'purple';

  headStyle = {
    color: 'red',
    'font-weight': 'bolder',
  };

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  onChangeColor(e: MouseEvent): void {
    this.mainColor = this.mainColor === 'purple' ? 'black' : 'purple';
  }
  onGoTodoView(e: MouseEvent): void {
    this.router.navigate(['todo', 'list']);
  }
}
