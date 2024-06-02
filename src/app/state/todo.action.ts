import { createAction, props } from "@ngrx/store";
import { TodoModel } from "../models/todo.model";


export const addTodo = createAction(
    '[TODO] Add Todo',
    props<{ todo: TodoModel }>()
)
export const deleteTodo = createAction(
    '[TODO] Delete Todo',
    props<{ id: number }>()
)
export const toggleTodo = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
)

export const setFilter = createAction(
    '[TODO] Set Filter',
    props<{ filter: string }>()
  );

export const loadDefaultTodos = createAction('[TODO] Load Default Todos');

export const clearCompletedTodos = createAction('[TODO] Clear Completed Todos');    