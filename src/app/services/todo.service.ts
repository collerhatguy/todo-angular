import { Injectable } from '@angular/core';
import Todo from '../Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  saveKey: string = "jacobs.todos";
  TodoList: Todo[] = JSON.parse(localStorage.getItem(this.saveKey) || "[]");
  
  getTodos() {
    return this.TodoList;
  }
  constructor() { }
  save() {
    localStorage.setItem(
      this.saveKey, 
      JSON.stringify(this.TodoList)
    )
  }
  updateTodos(todo: Todo) {
    this.TodoList = [...this.TodoList, todo];
    this.save()
    return this.TodoList;
  }
  handleClear() {
    this.TodoList = this.TodoList.filter(t => !t.completed);
    this.save()
    return this.TodoList;
  }
  handleCheck(todo: Todo) {
    this.TodoList = this.TodoList.map(t => {
      if (t === todo) return {
        ...t,
        completed: !t.completed
      }
      return t;
    })
    this.save()
    return this.TodoList;
  }
}
