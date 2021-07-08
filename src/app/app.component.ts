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
  shownTodoList: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.shownTodoList = this.todoService.getTodos();
  }

  changeTheme() {
    this.dark = !this.dark;
  }
  updateTodos(todo: Todo) {
    this.shownTodoList = this.todoService.updateTodos(todo);
  }
  handleActive() {
    this.shownTodoList = this.todoService.getTodos().filter(t => !t.completed);
  }
  handleAll() {
    this.shownTodoList = this.todoService.getTodos();
  }
  handleCompleted() {
    this.shownTodoList = this.todoService.getTodos().filter(t => t.completed);
  }
  handleClear() {
    this.shownTodoList = this.todoService.handleClear()
  }
  handleCheck(todo: Todo) {
    this.shownTodoList = this.todoService.handleCheck(todo);
  }
 
}
