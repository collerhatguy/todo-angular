import { Component } from '@angular/core';
import Todo from "./Todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'TODO';
  dark: boolean = true;
  TodoList: Todo[] = [
    {
      id: 1,
      todo: "stuff",
      completed: false
    },
    {
      id: 1,
      todo: "stuff",
      completed: false
    },
    {
      id: 1,
      todo: "stuff",
      completed: false
    },
];
  constructor() {
  }
  changeTheme() {
    this.dark = !this.dark;
  }
  updateTodos(todo: Todo) {
    this.TodoList = [...this.TodoList, todo]
  }
}
