import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListUxComponent } from './components/todo-list-ux/todo-list-ux.component';
import { StoreModule } from '@ngrx/store';

import themeReducer from './reducers/themeReducer';
import todoReducer from './reducers/todoReducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    TodoListComponent,
    TodoComponent,
    TodoListUxComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    StoreModule.forRoot({ theme: themeReducer, todos: todoReducer }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
