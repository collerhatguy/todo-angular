import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Todo from "../../interfaces/Todo";
import Todos from 'src/app/interfaces/TodoListState';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() theme: string = "dark";
  shownTodos$: Observable<Todos>

  
  constructor(private store: Store<{ todos: Todos}>) {
    this.shownTodos$ = this.store.pipe(select("todos"))
  }
  
  trackTodo(index: number, todo: Todo ) {
    return todo.id
  }
  ngOnInit(): void {
  }
}
