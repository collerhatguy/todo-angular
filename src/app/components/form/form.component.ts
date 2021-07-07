import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service";
import Todo from "../../Todo";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() dark: boolean = true;
  todo: string = "";
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  createTodo() {
    const newTodo: Todo = {
      todo: this.todo,
      id: Math.floor(Math.random() * 20),
      completed: false,
    }
    this.todoService.addTodo(newTodo)
  }
}
