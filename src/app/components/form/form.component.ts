import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todo from "../../Todo";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() dark: boolean = true;
  @Input() TodoList!: Todo[];
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  todo: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  createTodo() {
    if (!this.todo) return;
    const newTodo: Todo = {
      todo: this.todo,
      id: Math.floor(Math.random() * 20),
      completed: false,
    }
    this.addTodo.emit(newTodo);
    this.todo = "";
  }
}
