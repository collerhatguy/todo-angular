import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import Todo from "./Todo";

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'TODO';
  dark: boolean = true;
  TodoList: Todo[] = [];
  shownTodoList: Todo[] = this.TodoList;
  constructor(private todoService: TodoService) {
    this.TodoList = this.todoService.getTodos();
    this.shownTodoList = this.todoService.getTodos();
  }
  changeTheme() {
    this.dark = !this.dark;
  }
  updateTodos(todo: Todo) {
    this.TodoList = this.todoService.updateTodos(todo);
    this.shownTodoList = this.TodoList;
  }
  handleActive() {
    this.shownTodoList = this.TodoList.filter(t => !t.completed);
  }
  handleAll() {
    this.shownTodoList = this.TodoList;
  }
  handleCompleted() {
    this.shownTodoList = this.TodoList.filter(t => t.completed);
  }
  handleClear() {
    this.TodoList = this.todoService.handleClear()
    this.shownTodoList = this.TodoList;
  }
  handleCheck(todo: Todo) {
    this.TodoList = this.todoService.handleCheck(todo);
    this.shownTodoList = this.TodoList;
  }
 
}
