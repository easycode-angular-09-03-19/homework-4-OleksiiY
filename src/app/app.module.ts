import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';

import { FormsModule }   from '@angular/forms';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoItemComponent } from './components/add-todo-item/add-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
