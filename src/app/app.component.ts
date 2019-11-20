import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Required variables done,todos,newToDo,newToDoObj,error 
  done:boolean;
  newToDo:'';
  newToDoObj:any;
  error:boolean;
  todos:any[];
  marked = false;

  //Constructor here with todos as [] ,newToDo as '' and error as false
  constructor(){
    this.todos = [];
    this.newToDo = '';
    this.error = false;
  }
  //Function addMore here adds the activity in the array
  addMore(){
    
    let newToDoObj = {
      newToDo : this.newToDo,
      done : false
    }
    console.log();
  if(newToDoObj.newToDo.length>0){
    this.todos.push(newToDoObj);
    this.newToDo = '';
      
    }
  }
  //Function clearAll here clears all the activities from the array
  clearAll(){
    while (this.todos.length !== 0) {
    this.todos.pop();
  }
  }
}
