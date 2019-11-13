import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Define your variables done,todos,newToDo,newToDoObj,error
  done:boolean;
  newToDo:'';
  newToDoObj:any;
  error:boolean;
  todos:any[];
  marked = false;

  //Define your constructor here with todos as [] ,newToDo as '' and error as false
  constructor(){
    this.todos = [];
    this.newToDo = '';
    this.error = false;
  }
  //Define your addMore function here
  addMore(){
    let newToDoObj = {
      newToDo : this.newToDo,
      done : false
    }
    this.todos.push(newToDoObj);
    this.newToDo = '';
  }
  //Define your clearAll function here
  clearAll(){
    while (this.todos.length !== 0) {
    this.todos.pop();
  }
  }
}
