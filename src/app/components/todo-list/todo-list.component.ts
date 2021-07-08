import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todo from "../../Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() TodoList: Todo[] = [];
  @Input() dark: boolean = true;
  @Output() onDelete: EventEmitter<Todo> = new EventEmitter()
  @Output() onActive: EventEmitter<any> = new EventEmitter()
  @Output() onAll: EventEmitter<any> = new EventEmitter()
  @Output() onCompleted: EventEmitter<any> = new EventEmitter()

  constructor() { }
  handleDelete(todo: Todo) {
    this.onDelete.emit(todo);
  }
  handleActive() {
    this.onActive.emit();
  }
  handleAll() {
    this.onAll.emit();
  }
  handleCompleted() {
    this.onCompleted.emit();
  }
  ngOnInit(): void {
  }

}
