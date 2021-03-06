import { createAction, props } from "@ngrx/store";
import Todo from "../interfaces/Todo";

export const addTodo = createAction("ADD_TODO", props<{ payload: Todo }>())

export const checkTodo = createAction("CHECK_TODO", props<{ payload: Number }>())

export const clearTodos = createAction("CLEAR_TODOS")

export const selectAllTodos = createAction("SELECT_ALL_TODOS")

export const selectCompletedTodos = createAction("SELECT_COMPLETED_TODOS")

export const selectUncompletedTodos = createAction("SELECT_UNCOMPLETED_TODOS")