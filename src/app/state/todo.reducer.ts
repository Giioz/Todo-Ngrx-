import { createReducer, on } from "@ngrx/store";
import { addTodo, clearCompletedTodos, deleteTodo, loadDefaultTodos, setFilter, toggleTodo } from "./todo.action";
import { TodoModel } from "../models/todo.model";


export const initialState: TodoModel[] = [];

const _todoReducer = createReducer(
    initialState,
    on(addTodo, (state, { todo }) => [todo, ...state]),
    on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(toggleTodo, (state, { id }) => state.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    )),
    on(clearCompletedTodos, state => state.filter(todo => !todo.completed)),
    on(loadDefaultTodos, state => [
        ...state,
        { id: 1, content: 'Buy groceries', completed: false },
        { id: 2, content: 'Clean the house', completed: false },
        { id: 3, content: 'Prepare dinner', completed: true }
      ]),
    )

export function todoReducer(state:any, action:any) {
    return _todoReducer(state, action)
}