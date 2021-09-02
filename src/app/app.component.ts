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
  dark$: Observable<boolean>;

  constructor(private store: Store<{ dark: boolean }>) {
    this.dark$ = store.pipe(select("dark"))
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
