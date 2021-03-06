import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Todo from "../../interfaces/Todo";
import { checkTodo } from 'src/app/actions/todoActions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() theme!: string;

  constructor(private store: Store) { }
  onCheck() {
    this.store.dispatch(checkTodo({ payload: this.todo.id}))
  }
  ngOnInit(): void {
  }

}
