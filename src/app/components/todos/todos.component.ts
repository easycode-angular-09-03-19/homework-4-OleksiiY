import {Component, OnInit} from '@angular/core';
import {Todo} from '../../interfaces/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList: Todo[] = [
    {
      id: 1,
      text: 'Do Sport',
      completed: false
    },
    {
      id: 2,
      text: 'Do Work',
      completed: false
    }
  ];

  isEmptyList: boolean;

  constructor() {
  }


  ngOnInit() {
  }

  onOutputAddToTodoList(todoText): void {
    let idTodo = this.todoList.length + 1;
    let newTodo: Todo = {
      id: idTodo,
      text: todoText,
      completed: false
    };
    this.todoList.push(newTodo);
    if (this.todoList.length > 0) {
      this.isEmptyList = false;
    }
  }

  onOutputDeleteEvent(item: Todo): void {
    this.todoList.forEach((elem, index, todoList) => {
      if (item.id == elem.id) {
        todoList.splice(index, 1);
        if (this.todoList.length == 0) {
          this.isEmptyList = true;
        }
        return;
      }
    });

  }

  onOutputMarkedDoneEvent(item: Todo): void {
    this.todoList.forEach((elem, index, todoList) => {
      if (item.id == elem.id) {
        todoList[index].completed = item.completed;
        return;
      }
    });
  }

  completeAllTasks(): void {
    this.todoList.forEach((elem, index, todoList) => {
      elem.completed = true;
    });
  }
}
