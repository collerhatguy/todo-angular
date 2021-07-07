import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todo from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() dark!: boolean;
  @Output() handleDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }
  onDelete() {
    this.handleDelete.emit()
  }
  ngOnInit(): void {
  }

}
