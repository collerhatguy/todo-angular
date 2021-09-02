import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Todo from "../../interfaces/Todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() dark!: boolean;

  constructor(private store: Store) { }
  onCheck() {
    this.store.dispatch()
  }
  ngOnInit(): void {
  }

}
