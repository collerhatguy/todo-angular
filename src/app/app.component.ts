import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'TODO';
  dark$: Observable<boolean>;

  constructor(private store: Store<any>) {
  }

  // changeTheme() {
  //   this.dark = !this.dark;
  // }
  // updateTodos(todo: Todo) {
  //   this.shownTodoList = this.todoService.updateTodos(todo);
  // }
  // handleActive() {
  //   this.shownTodoList = this.todoService.getTodos().filter(t => !t.completed);
  // }
  // handleAll() {
  //   this.shownTodoList = this.todoService.getTodos();
  // }
  // handleCompleted() {
  //   this.shownTodoList = this.todoService.getTodos().filter(t => t.completed);
  // }
  // handleClear() {
  //   this.shownTodoList = this.todoService.handleClear()
  // }
  // handleCheck(todo: Todo) {
  //   this.shownTodoList = this.todoService.handleCheck(todo);
  // }
 
}
