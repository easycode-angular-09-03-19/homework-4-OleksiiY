import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy,} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() todo;
  @Output() deleteTodo = new EventEmitter();
  @Output() markedDone = new EventEmitter();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnDestroy() {
  }

  ngOnInit() {
  }


  onDelete() {
    let consent = confirm('Are you sure want to delete? ');
    if (consent) {
      this.deleteTodo.emit(this.todo);
    } else {
      return;
    }
  }

  onMarkedDone() {
    this.todo.completed = !this.todo.completed;
    this.markedDone.emit(this.todo);
  }
}
