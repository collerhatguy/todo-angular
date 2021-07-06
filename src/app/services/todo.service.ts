import { Injectable } from '@angular/core';
import Todo from "../Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  TodoList: Todo[] = [];
  constructor() { }

  getTodoList() {
    return this.TodoList
  }
  addTodo(todo: Todo) {
    this.TodoList = [...this.TodoList, todo];
  }
}
