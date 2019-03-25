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
    },
    {
      id: 3,
      text: 'To have a lunch',
      completed: false
    }
  ];

  constructor() {
  }


  ngOnInit() {
  }


  onOutputDeleteEvent(item: Todo) {
    console.log('item', item);
    this.todoList.forEach((elem, index, todoList) => {
      if (item.id == elem.id) {
        todoList.splice(index, 1);
        return;
      }
    });
  }

  onOutputMarkedDoneEvent(item: Todo) {
    this.todoList.forEach((elem, index, todoList) => {
      if (item.id == elem.id) {
        todoList[index].completed = item.completed;
        return;
      }
    });
  }

  completeAllTasks() {
    this.todoList.forEach((elem, index, todoList) => {
      elem.completed = true;
    });

  }


}
