import { Component, Injectable, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as appStore from '../store/store';
import { ToDo } from '../models/ToDo';
import {ToDoAction} from '../actions/ToDoAction';
import { Color } from '../models/Color';
import {ColorAction} from '../actions/ColorAction';

@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToDoAction, ColorAction]
})
export class AppComponent implements OnInit{
  todos$: Observable<Array<ToDo>>;
  colors$: Observable<Array<Color>>;
  text: string;

  constructor(private store: Store<appStore.IAppStore>, private todoAction: ToDoAction, private colorAction: ColorAction) {
    //this.todos = 
  }

  ngOnInit() {
   this.text = ''; 
   this.todos$ = this.store.select(appStore.getAllToDos);
   this.colors$ = this.store.select(appStore.getAllColors);
   this.colorAction.LoadColors();
  }

  addTodo(todo) {
    //console.log(text);
    this.todoAction.AddToDo(todo.text);
    this.text = '';
  }

  deleteToDo(todo) {
    this.todoAction.DeleteToDo(todo.id);
  }

}
