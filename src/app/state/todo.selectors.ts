import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoModel } from '../models/todo.model';

export const selectTodos = createFeatureSelector<TodoModel[]>('todos');

export const selectAllTodos = createSelector(
  selectTodos,
  (todos: TodoModel[]) => todos
);

