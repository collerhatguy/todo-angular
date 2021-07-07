import { Component, Input, OnInit } from '@angular/core';
import Todo from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() dark!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
