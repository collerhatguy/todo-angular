import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-ux',
  templateUrl: './todo-list-ux.component.html',
  styleUrls: ['./todo-list-ux.component.scss']
})
export class TodoListUxComponent implements OnInit {
  @Input() length!: number;
  @Input() dark!: boolean;
  @Output() handleAll: EventEmitter<null> = new EventEmitter();
  @Output() handleCompleted: EventEmitter<null> = new EventEmitter();
  @Output() handleActive: EventEmitter<null> = new EventEmitter();
  @Output() onClear: EventEmitter<null> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  allTodos() {
    this.handleAll.emit()
  }
  activeTodos() {
    this.handleActive.emit()
  }
  completedTodos() {
    this.handleCompleted.emit()
  }
  clearCompleted() {
    this.onClear.emit();
  }

}
