import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Todo from "../../interfaces/Todo";
import { addTodo } from 'src/app/actions/todoActions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() dark: boolean = true;
  todo: string = "";
  constructor(private store: Store) { }

  ngOnInit(): void {
  }
  createTodo() {
    if (!this.todo.trim()) return;
    const newTodo: Todo = {
      todo: this.todo,
      id: Date.now(),
      completed: false,
    }
    this.store.dispatch(addTodo({ payload: newTodo }))
    this.todo = "";
  }
}
