import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListUxComponent } from './todo-list-ux.component';

describe('TodoListUxComponent', () => {
  let component: TodoListUxComponent;
  let fixture: ComponentFixture<TodoListUxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListUxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
