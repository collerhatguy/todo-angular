import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearTodos, selectCompletedTodos, selectAllTodos, selectUncompletedTodos } from "src/app/actions/todoActions"

@Component({
  selector: 'app-todo-list-ux',
  templateUrl: './todo-list-ux.component.html',
  styleUrls: ['./todo-list-ux.component.scss']
})
export class TodoListUxComponent implements OnInit {
  @Input() length!: number;
  @Input() theme!: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  allTodos() {
    this.store.dispatch(selectAllTodos())
  }
  activeTodos() {
    this.store.dispatch(selectCompletedTodos())
  }
  completedTodos() {
    this.store.dispatch(selectUncompletedTodos())
  }
  clearCompleted() {
    this.store.dispatch(clearTodos())
  }

}
