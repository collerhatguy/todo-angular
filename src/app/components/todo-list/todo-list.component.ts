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

  @Input() dark: boolean = true;
  shownTodos$: Observable<Todo[]>

  
  constructor(private store: Store<Todos>) {
    this.shownTodos$ = store.pipe(select("shownTodos"))
  }
  
  trackTodo(index: number, todo: Todo ) {
    return todo.id
  }
  ngOnInit(): void {
  }
}
