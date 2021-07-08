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
  @Output() handleCheck: EventEmitter<Todo> = new EventEmitter();

  constructor() { }
  onCheck() {
    this.handleCheck.emit()
  }
  ngOnInit(): void {
  }

}
