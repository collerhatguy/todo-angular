import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllTodos, selectUncompletedTodos, selectCompletedTodos, clearTodos } from "./actions/todoActions";

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'TODO';
  theme$: Observable<string>;

  constructor(private store: Store<{ theme: string }>) {
    this.theme$ = store.pipe(select("theme"))
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
