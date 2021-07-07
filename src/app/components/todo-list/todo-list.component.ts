import { Component, Input, OnInit } from '@angular/core';
import Todo from "../../Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() TodoList: Todo[] = [];
  @Input() dark: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
