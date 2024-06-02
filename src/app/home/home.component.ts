import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TodoModel } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { selectAllTodos } from '../state/todo.selectors';
import { addTodo, clearCompletedTodos, deleteTodo, loadDefaultTodos, toggleTodo } from '../state/todo.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ngOnInit() {
    this.store.dispatch(loadDefaultTodos());
  }

  public todos$!: Observable<TodoModel[]>
  public todosLength$!: Observable<number>
  public newTodoContent!:string
  public isCompleted: boolean = false

  constructor(private store: Store){
    this.todos$ = this.store.select(selectAllTodos)
    this.todosLength$ = this.todos$.pipe(
      map((todos:any) => todos.length)
    );
  }
  
  
  addTodo() {
    if(this.newTodoContent){
      const newTodo: TodoModel = {
        id: Math.random(),
        content: this.newTodoContent,
        completed: this.isCompleted
      }
      this.store.dispatch(addTodo({ todo: newTodo}))
      this.newTodoContent = ''
    }
  }
  getToggleValue(event:any) {
    this.isCompleted = event.target.checked
  }

  deleteTodo(id:number){
    this.store.dispatch(deleteTodo({id}))
  }

  toggleTodoCompletion(id:number){
    this.store.dispatch(toggleTodo({id}))
  }
  clearCompleted() {
    this.store.dispatch(clearCompletedTodos());
  }

}
