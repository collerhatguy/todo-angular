import { Component } from '@angular/core';
import Todo from "./Todo";

@Component({
  selector: 'body',
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
  shownTodoList: Todo[] = this.TodoList;
  constructor() {
  }
  changeTheme() {
    this.dark = !this.dark;
  }
  updateTodos(todo: Todo) {
    this.TodoList = [...this.TodoList, todo]
    this.shownTodoList = this.TodoList;
  }
  handleDelete(todo: Todo) {
    this.TodoList = this.TodoList.filter(t=>t !== todo)
    this.shownTodoList = this.TodoList;
  }
  handleActive() {
    this.shownTodoList = this.TodoList.filter(t => !t.completed)
  }
  handleAll() {
    this.shownTodoList = this.TodoList
  }
  handleCompleted() {
    this.shownTodoList = this.TodoList.filter(t => t.completed)
  
  }
 
}
