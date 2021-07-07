import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { TodoService } from "../../services/todo.service";
import Todo from "../../Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];
  dark!: boolean;

  constructor(private todoService: TodoService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodoList();
    this.themeService.getDark().subscribe((value) => this.dark = value);
  }

}
