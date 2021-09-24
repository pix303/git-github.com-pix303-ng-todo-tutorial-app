import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  onChangeColor(e: MouseEvent): void {
    this.mainColor = this.mainColor === 'purple' ? 'black' : 'purple';
  }
}
