import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {

  @Output() addToTodoList = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) {
    this.addToTodoList.emit(myForm.value.text);
    myForm.reset();
  }
}
